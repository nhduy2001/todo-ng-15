import {
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent
  implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy
{
  todos: string[] = [];
  newTodo = '';
  lastAddedIndex: number | null = null;

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo);
      this.lastAddedIndex = this.todos.length - 1;
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todoService.removeTodo(index);
  }

  get taskLabel() {
    return this.todos.length === 1 ? 'task' : 'tasks';
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    console.log('ngOnInit - Component initialized');
  }

  ngOnChanges() {
    console.log('ngOnChanges - When an @Input changes');
  }

  ngDoCheck() {
    console.log('ngDoCheck - Angular runs change detection');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit - View has been rendered');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - Component is being destroyed');
  }
}
