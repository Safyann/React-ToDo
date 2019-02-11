import React, {
  Component
} from 'react';

import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);
    this.updateTodoItem = this.updateTodoItem.bind(this);
    this.eachTodoItem = this.eachTodoItem.bind(this);
  };

  deleteTodoItem = (i) => {
    var arr = this.props.todos;
    arr.splice(i, 1);
    this.setState({
      todos: arr
    });
  };

  updateTodoItem = (text, i) => {
    var arr = this.props.todos;
    arr[i] = text;
    this.setState({
      todos: arr
    });
  };

  eachTodoItem = (todo) => {
    return ( 
      <TodoItem key={todo.id} index={todo.id} 
                updateTodoItem={this.updateTodoItem} 
                deleteTodoItem={this.deleteTodoItem}>
        {todo.todo}
      </TodoItem>
    );
  };

  render() {
    return (
      <ul className='todo-list m-t ui-sortable'>
        {this.props.todos.map (this.eachTodoItem)}
      </ul>
    )
  }
}

export default TodoList