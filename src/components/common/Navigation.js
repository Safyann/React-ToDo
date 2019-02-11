import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import metismenu from 'metismenu';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        // return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
        return 'active';
    }

    render() {

        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <ul className="nav metismenu" id="side-menu" ref="menu">
                    <li className="nav-header">
                        <div className="dropdown profile-element">
                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                <span className="block m-t-xs font-bold">User</span>
                                <span className="text-muted text-xs">Меню<b className="caret"></b></span>
                            </a>
                            <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                <li>
                                    <Link to = "/login" >
                                        <span className="nav-label">Выход</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="logo-element">
                            IN+
                        </div>
                    </li>
                    <li className={this.activeRoute("/todos")}>
                        < Link to = "/todos" >
                            <i className="fa fa-th-large"></i>
                            <span className="nav-label">Списки</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation