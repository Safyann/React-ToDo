import React from 'react';
import {Checkbox} from 'react-icheck';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      agree: false
    };
  };

  validate = () => {
    const { name, email, password, agree } = this.state;
    if (name.trim() && email.trim() && password.trim() && agree) {
      return true;
    }
    return false;
  }

  handleChange = (e) => {
    const { id, value } = e.currentTarget
    this.setState({ [id]: value })
  }

  render() {
    const { name, email, password, agree } = this.state
    let wrapperClass = "gray-bg " + this.props.location.pathname;
    return (
      <div className={wrapperClass}>
        <div className="middle-box text-center loginscreen animated fadeInDown">
          <div>
            <div>
                <h1 className="logo-name">IN+</h1>
            </div>
            <h3>Зарегестрируйся в IN+</h3>
            <p>Создай аккаунт</p>
            <form className="m-t" role="form" action='/'>
              <div className="form-group">
                < input type = "text"
                  id = 'name'
                  className = "form-control"
                  placeholder = "Name"
                  onChange={this.handleChange}
                  value={name}
                  required = "" />
              </div>
              <div className="form-group">
                < input type = "email"
                  id = 'email'
                  value={email}
                  className = "form-control"
                  placeholder = "Email"
                  onChange={this.handleChange}
                  required = "" />
              </div>
              < div className = "form-group" >
                < input type = "password"
                  id = 'password'
                  value={password}
                  className = "form-control"
                  placeholder = "Password"
                  onChange={this.handleChange}
                  required = "" />
              </div>
              <div class="form-group">
                <div class="checkbox i-checks">
                  <Checkbox
                    checkboxClass = "icheckbox_square-green"
                    increaseArea = "20%"
                    id = 'agree'
                    value={agree}
                    onChange={this.handleChange}
                    label = 'Согласие на обработку своих персональных данных' / >
                </div>
              </div>
              < button type = "submit"
                className = "btn btn-primary block full-width m-b"
                disabled={!this.validate()}>
                Зарегестрироваться
              </button>
              <p className="text-muted text-center"><small>Уже есть аккаунт?</small></p>
              <Link className="btn btn-sm btn-white btn-block" to = "/login" >
                  <span className="nav-label">Войти</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    $('body').addClass('gray-bg');
  }

  componentWillUnmount() {
    $('body').removeClass('gray-bg');
  }
}

export default Register