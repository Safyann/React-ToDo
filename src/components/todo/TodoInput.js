import React, {
  Component
} from 'react';

class TodoInput extends Component {
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
    this.props.addTodo(this.state.value);
    this.setState({
      value:''
    });
    event.preventDefault();
  }

  render() {
    return (
      <form className="input-group">
        <input type="text"
        className="form-control" 
        placeholder = 'Задание'
        value={this.state.value}
        onChange={this.handleChange}/>
        <span className="input-group-append">
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
            <i className='fa fa-plus'></i>
          </button>
        </span>
      </form>
    )
  }
}

export default TodoInput