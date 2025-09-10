import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() item = '';
  @Input() index = 0;
  @Input() isNew = false;
  @Output() removeItem = new EventEmitter<void>();

  remove() {
    this.removeItem.emit();
  }
}
