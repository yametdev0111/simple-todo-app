import { v4 as uuidv4 } from "uuid";

const initialState = [
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

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APPEND":
      return [...state, action.payload];
    case "DELETE":
      return [...state.filter(todo => todo.id === action.payload)];
    case "SELECT":
      return [...state.map(todo => ({
        ...todo,
        completed: todo.id === action.payload ? !todo.completed : todo.completed
      }))]
    case "ELIMINATE":
      return [...state.filter(todo => !todo.completed)];
    case "CLEAR":
      return [];
    case "SET":
      return action.payload;
    default:
      return state;
  }
}

export default todoReducer;