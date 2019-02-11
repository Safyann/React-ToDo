import React, { Component } from 'react';

import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoTitle from './TodoTitle';
import TodoFooter from './TodoFooter';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todos: [],
          value: '',
        };
        this.addTodo = this.addTodo.bind(this);
      };

      addTodo = (value) => {
        var arr = this.props.todos;
        arr.push(value)
        this.setState({
            todos: arr
        });
      };

    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center m-t-lg">
                        < TodoTitle
                            updateListTitle={this.props.updateListTitle}
                            deleteTodoList={this.props.deleteTodoList}
                            index={this.props.index}>{this.props.children}
                        </TodoTitle>
                        < TodoInput addTodo={this.addTodo} />
                        < TodoList todos={this.state.todos}/>
                    </div>
                </div>
                {/* < TodoFooter todos={this.state.todos}/> */}
            </div>
        )
    }
}
  
export default Todo