import { createAction, props } from '@ngrx/store';

export const addTodo = createAction('[Todo] Add', props<{ task: string }>());

export const removeTodo = createAction(
  '[Todo] Remove',
  props<{ index: number }>()
);
