import { v4 as uuidv4 } from "uuid";

export const appendTodoItem = title => ({
  type: "APPEND",
  payload: {
    title, 
    completed: false,
    id: uuidv4()
  }
});

export const deleteTodoItem = id => ({
  type: "DELETE",
  payload: id
});

export const selectTodoItem = id => ({
  type: "SELECT",
  payload: id
});

export const eliminateTodoItems = () => ({
  type: "ELIMINATE"
});

export const clearTodoItems = () => ({
  type: "CLEAR"
});