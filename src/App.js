import React from "react";
import { Provider } from "react-redux";
import TodoContainer from "./components/TodoContainer";
import { store } from "./redux";

function App() {
  return(
    <Provider store={store}>
      <TodoContainer />
    </Provider>
  )
}

export default App;