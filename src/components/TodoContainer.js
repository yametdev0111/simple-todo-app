import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { useDispatch, useSelector } from "react-redux";
import { appendTodoItem, clearTodoItems, deleteTodoItem, eliminateTodoItems, selectTodoItem } from "../redux/actions";

const TodoContainer = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [step, setStep] = useState(0);

  const selectItem = (id) => {
    dispatch(selectTodoItem(id));
  };

  const deleteItem = (id) => {
    dispatch(deleteTodoItem(id));
  };

  const appendItem = (title) => {
    dispatch(appendTodoItem(title))
  };

  const eliminateItems = () => {
    dispatch(eliminateTodoItems());
  }

  const clearItems = () => {
    dispatch(clearTodoItems());
  }

  const undo = () => {

  }

  const redo = () => {

  }

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={appendItem} />
      <TodosList
        todos={todos}
        handleChangeProps={selectItem}
        deleteTodoProps={deleteItem}
      />
    </div>
  );
}
export default TodoContainer;
