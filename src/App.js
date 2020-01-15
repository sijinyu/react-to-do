import React, { Component } from 'react';
import TodoListTemplate from './Components/TodoListTemplate';
import Form from './Components/Form';
import Todoitem from './Components/Todoitem';
import TodoItemList from './Components/TodoItemList';
class App extends Component {
  id= 3

  state = {
    input: '',
    todos: [
      {id:0, text: '하이염', checked:false},
      {id:1, text: '리액트 소개', checked:true},
      {id:2, text: '뿌라라라', checked: false}
    ]
  }
  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 바뀔 값
    });
  }
  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input: '', //인풋 비우고
      //concat을 사용하여 배열에 추가
      todos:todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    //눌려진 키가 enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

    handleToggle = (id) => {
      const { todos } = this.state;

      // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
      const index = todos.findIndex(todo => todo.id === id);
      const selected = todos[index]; // 선택한 객체

      const nextTodos = [...todos]; // 배열을 복사

      // 기존의 값들을 복사하고, checked 값을 덮어쓰기
      nextTodos[index] = {
        ...selected,
        checked: !selected.checked
      };

      this.setState({
        todos: nextTodos
      });
    }

    render() {
      const { input, todos } = this.state;
      const {
        handleChange,
        handleCreate,
        handleKeyPress,
        handleToggle,
        handleRemove
      } = this;

      return (
        <TodoListTemplate form={(
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        )}>
          <TodoItemList todos={todos} onToggle={handleToggle}
          onRemove={handleRemove}/>
        </TodoListTemplate>
      );
    }
  }

  export default App;
