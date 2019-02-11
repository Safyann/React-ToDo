import React, { Component } from 'react';

class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.addTodoList(this.state.value);
    this.setState({
      value: ''
    });
    event.preventDefault();
  }
  render() {
    return (
      < div className = 'm-t-sm' >
        <form>
          <input type="text" 
            value={this.state.value}
            onChange={this.handleChange} 
            className='form-group form-control' 
            placeholder="Название перечня задач"/>
          <div className="form-group">
            <button type="submit" 
              className="btn btn-primary btn-rounded m-r-sm"
              onClick={this.handleSubmit}>
              Добавить Список Задач
            </button>
          </div>
        </form>
      </div>
    )
  };
};

export default AddList