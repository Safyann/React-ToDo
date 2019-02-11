import React, { Component } from 'react';
import Todo from './todo/Todo';
import AddList from './AddList';

class AllTodos extends Component {
    constructor(props) {
    super(props)
    this.state = {
      todoLits: [
        'Список 1'
      ]
    };
    this.deleteTodoList = this.deleteTodoList.bind(this);
    this.eachTodoList = this.eachTodoList.bind(this);
    this.updateListTitle = this.updateListTitle.bind(this);
    this.addTodoList = this.addTodoList.bind(this);
  };

  deleteTodoList = (i) => {
    var arr = this.state.todoLits;
    arr.splice(i, 1);
    this.setState({
      todoList: arr
    });
  };

  updateListTitle = (text, i) => {
    var arr = this.state.todoLits;
    arr[i] = text;
    this.setState({
      todoLits: arr
    })
  };

  addTodoList = (value) => {
    var arr = this.state.todoLits;
    arr.push(value)
    this.setState({
      todoLits: arr
    });
  }

  eachTodoList = (item, i) => {
    return ( 
      <Todo key={i} index={i}
        todoLits={this.state.todoLits}
        deleteTodoList={this.deleteTodoList}
        updateListTitle={this.updateListTitle} >
        {item}
      </Todo>
    );
  };

  render() {
    return (
      <div className="wrapper wrapper-content animated fadeInRight">
        {this.state.todoLits.map (this.eachTodoList)}
        <hr className='hr-line-dashed'></hr>
        <AddList addTodoList={this.addTodoList}/>
      </div>
    )
  };
};

export default AllTodos