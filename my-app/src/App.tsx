import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Todo from './components/maxTodo/Todo';

import TodoModel from './models/ModelTodo';
import Typecourse from './typecourse/Typecourse';




function App() {

  // const todos = [
  //   new TodoModel("learn React"),
  //   new TodoModel("learn typescript")
  // ] 
  return (
    <div className="App">
      <Typecourse/>
      {/* <TodoList/>  */}
      {/* <Todo items={todos}/> */}
    </div>
  );
}

export default App;
