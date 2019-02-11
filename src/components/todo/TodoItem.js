import React, { Component } from "react";
import { Checkbox } from "react-icheck";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
  }

  editTodo = () => {
    this.setState({
      edit: true
    });
  };

  saveTodo = () => {
    this.props.updateTodoItem(this.refs.newTxt.value, this.props.index);
    this.setState({
      edit: false
    });
  };

  removeTodo = () => {
    this.props.deleteTodoItem(this.props.index);
  };

  rendNorm = () => {
    return (
      <li className="i-checks">
        <Checkbox
          checkboxClass="icheckbox_square-green"
          increaseArea="20%"
          label={this.props.children}
        />
        <div>
          <button
            type="button"
            className="btn btn-info"
            onClick={this.editTodo}
          >
            <i className="fa fa-edit" />
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.removeTodo}
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  };

  rendEdit = () => {
    return (
      <li className="i-checks">
        <form className="input-group">
          <input
            type="text"
            className="form-control"
            ref="newTxt"
            defaultValue={this.props.children}
          />
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.saveTodo}
            >
              <i className="fa fa-check" />
            </button>
          </div>
        </form>
      </li>
    );
  };

  render() {
    if (this.state.edit) {
      return this.rendEdit();
    } else {
      return this.rendNorm();
    }
  }
}

export default TodoItem;
