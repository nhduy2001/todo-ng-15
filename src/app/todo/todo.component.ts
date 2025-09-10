import {
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent
  implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy
{
  todos: string[] = ['Học Angular', 'Làm Todo App', 'Ôn Lifecycle Hooks'];

  newTodo = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo);
      this.newTodo = ''; // reset input
    }
  }

  ngOnInit() {
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
