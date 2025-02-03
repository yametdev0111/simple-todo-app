import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const initialTodos = [
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Setup development environment",
      completed: true,
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Develop website and add content",
      completed: false,
    },
    {
      // id: uuid.v4(),
      id: uuidv4(),
      title: "Deploy to live server",
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const selectTodoItem = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  const deleteTodoItem = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const appendTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={appendTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={selectTodoItem}
        deleteTodoProps={deleteTodoItem}
      />
    </div>
  );
}
export default TodoContainer;
