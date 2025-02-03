import React, { useEffect, useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import Toolbar from './Toolbar';
import { useDispatch, useSelector } from "react-redux";
import { appendTodoItem, clearTodoItems, deleteTodoItem, eliminateTodoItems, selectTodoItem, setTodoItems } from "../redux/actions";

const TodoContainer = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [states, setStates] = useState([]);
  const [step, setStep] = useState(0);
  const [action, setAction] = useState('');

  const selectItem = (id) => {
    setAction('Select');
    dispatch(selectTodoItem(id));
  };

  const deleteItem = (id) => {
    setAction('Delete');
    dispatch(deleteTodoItem(id));
  };

  const appendItem = (title) => {
    setAction('Append');
    dispatch(appendTodoItem(title))
  };

  const eliminateItems = () => {
    setAction('Eliminate');
    dispatch(eliminateTodoItems());
  }

  const clearItems = () => {
    setAction('Clear');
    dispatch(clearTodoItems());
  }

  const undo = () => {
    if (step - 1) {
      setAction('Undo');
      setStep(step - 1);
      dispatch(setTodoItems(states[step - 2]));
    }
  }

  const redo = () => {
    if (step !== states.length) {
      setAction('Redo');
      setStep(step + 1);
      dispatch(setTodoItems(states[step]));
    }
  }

  useEffect(() => {
    if (action !== 'Undo' && action !== 'Redo') {
      setStates([...states.slice(0, step), todos]);
      setStep(step + 1);
    }
  }, [todos])

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={appendItem} />
      <Toolbar
        eliminate={eliminateItems}
        clear={clearItems}
        undo={undo}
        redo={redo}
      />
      <TodosList
        todos={todos}
        handleChangeProps={selectItem}
        deleteTodoProps={deleteItem}
      />
    </div>
  );
}
export default TodoContainer;
