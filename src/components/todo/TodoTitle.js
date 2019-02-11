import React, {
  Component
} from 'react';

class TodoTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
    this.editTitle = this.editTitle.bind(this);
    this.saveTitle = this.saveTitle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTodoList = this.removeTodoList.bind(this);
  }

  editTitle = (e) => {
    e.preventDefault();
    this.setState({
      edit: true
    });
  }

  handleChange(event) {
    this.setState({
      defaultValue: event.target.value
    });
  }

  saveTitle = () => {
    this.props.updateListTitle(this.refs.newTitle.value, this.props.index)
    this.setState({
      edit: false
    });
  }

  removeTodoList = () => {
    this.props.deleteTodoList(this.props.index);
  }

  rendNorm = () => {
    return (
      <div className="dropdown profile-element">
        <a data-toggle="dropdown" className="dropdown-toggle" href="#">
            <h1 className="text-muted text-xs">{this.props.children || 'Список'}<b className="caret"></b></h1>
        </a>
        <ul className="dropdown-menu dropdown-menu--title animated fadeInUp m-t-xs">
            <li><a href="#" onClick={this.editTitle}>Редактировать</a></li>
            <li><a href="#" onClick={this.removeTodoList}>Удалить</a></li>
        </ul>
      </div>
    );
  }

  rendEdit = () => {
    return (
      <li className='i-checks'>
        <form className="input-group">
          < input type = 'text'
          className = 'form-control'
          ref = 'newTitle'
          onChange = {
            this.handleChange
          }
          defaultValue = {
            this.props.children
          }
          />
          <div>
            <button type='submit' className='btn btn-primary' onClick={this.saveTitle}>
              <i className='fa fa-check'></i>
            </button>
          </div>
        </form>
      </li>
    );
  }

  render() {
    if (this.state.edit) {
      return this.rendEdit();
    } else {
      return this.rendNorm();
    }
  }
}

export default TodoTitle