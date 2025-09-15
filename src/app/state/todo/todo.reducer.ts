import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo } from './todo.actions';

export const initialState: string[] = ['Learning Angular'];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { task }) => [...state, task]),
  on(removeTodo, (state, { index }) => state.filter((_, i) => i !== index))
);
