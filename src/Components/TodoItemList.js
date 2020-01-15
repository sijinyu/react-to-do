import React, {Component} from 'react';
import Todoitem from './Todoitem';

class TodoItemList extends Component {
    render() {
      const { todos, onToggle, onRemove} = this.props;
      const todoList = todos.map (
        ({id, text, checked}) => (
          <Todoitem
           id={id}
           text={text}
           checked={checked}
           onToggle={onToggle}
           onRemove={onRemove}
           key={id} />
        )
      );

      return (

        <div>
          {todoList}
        </div>
      );
    }
}

export default TodoItemList;
