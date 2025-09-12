import {
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TodoService } from '../todo.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { uniqueTaskValidator } from '../validators/unique-task.validator';

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

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private todoService: TodoService
  ) {}

  todoForm = this.formbuilder.group({
    newTodo: [
      '',
      [Validators.required, Validators.minLength(3)],
      [uniqueTaskValidator(this.http)],
    ],
  });

  addTodo() {
    if (this.todoForm.valid) {
      this.todoService.addTodo(this.todoForm.value.newTodo!);
      this.todoForm.reset();
    }
  }

  removeTodo(index: number) {
    this.todoService.removeTodo(index);
  }

  get taskLabel() {
    return this.todos.length === 1 ? 'task' : 'tasks';
  }

  ngOnInit() {
    this.todoService.todos$.subscribe((todos) => (this.todos = todos));
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
