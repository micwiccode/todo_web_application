export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export function addTask(name) {
  return { type: ADD_TASK, name };
}

export function toggleTask(index) {
  return { type: TOGGLE_TASK, index };
}

export function deleteTask(index) {
  return { type: DELETE_TASK, index };
}
