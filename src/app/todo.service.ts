import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoSubject = new BehaviorSubject<string[]>(['Learning Angular']);

  todos$ = this.todoSubject.asObservable();

  getTodos() {
    return this.todos$;
  }

  addTodo(todo: string) {
    const current = this.todoSubject.value;
    this.todoSubject.next([...current, todo]);
  }

  removeTodo(index: number) {
    const current = this.todoSubject.value;
    const updated = current.filter((_, i) => i != index);

    this.todoSubject.next(updated);
  }
}
