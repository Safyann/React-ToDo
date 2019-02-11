import React from 'react';
import { correctHeight, detectBody } from './Helpers';
import { Link } from 'react-router-dom';
import $ from 'jquery';


class Home extends React.Component {
     constructor(props) {
         super(props);
         this.state = {
             name: '',
             password: ''
         };
     };

     validate = () => {
         const {
             name,
             password
         } = this.state;
         if (name.trim() && password.trim()) {
             return true;
         }
         return false;
     }

     handleChange = (e) => {
        const { id, value } = e.currentTarget
        this.setState({ [id]: value })
    }

    render() {
        const {name,password} = this.state;
        let wrapperClass = "gray-bg";
        return (
            <div className={wrapperClass}>
                 <div className="middle-box text-center loginscreen animated fadeInDown">
                    <div>
                        <div>
                            <h1 className="logo-name">IN+</h1>
                        </div>
                        <h3>Добро пожаловать в IN+</h3>
                        <p>Введите логин и пароль</p>
                        <form className="m-t" role="form" action='/'>
                            <div className="form-group">
                                < input type = "text"
                                className = "form-control"
                                placeholder = "Name"
                                id = 'name'
                                value={name}
                                onChange={this.handleChange}
                                required = "" />
                            </div>
                            < div className = "form-group" >
                                < input type = "password"
                                className = "form-control"
                                placeholder = "Password"
                                id = 'password'
                                value={password}
                                onChange={this.handleChange}
                                required = "" />
                            </div>
                            < button type = "submit"
                                className = "btn btn-primary block full-width m-b"
                                disabled={!this.validate()}
                            >
                                Войти 
                            </button>

                            <a href="#"><small>Забыли пароль?</small></a>
                            <p className="text-muted text-center"><small>У вас до сих пор нет аккаунта?</small></p>
                            <Link className="btn btn-sm btn-white btn-block" to = "/register" >
                                <span className="nav-label">Создать аккаунт</span>
                            </Link>
                        </form>
                    </div>
                </div>

            </div>

        )
    }

    componentDidMount() {
        $('body').addClass('gray-bg');

        // Run correctHeight function on load and resize window event
        $(window).bind("load resize", function() {
            correctHeight();
            detectBody();
        });
    }

    componentWillUnmount() {
        $('body').removeClass('gray-bg');
    }
}

export default Home