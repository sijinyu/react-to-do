import React, { Component } from 'react';
import TodoListTemplate from './Components/TodoListTemplate';
import Form from './Components/Form';
import TodoItemList from './Components/TodoItemList';


class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
        <TodoItemList />
      </TodoListTemplate>
    );
  }
}

export default App;
