import React from 'react';
import { smoothlyMenu } from '../layouts/Helpers';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class TopHeader extends React.Component {

    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                    <div className="navbar-header">
                        <a 
                            className="navbar-minimalize minimalize-styl-2 btn btn-primary "
                            onClick={this.toggleNavigation} href="#"
                        >
                            <i className="fa fa-bars"></i> 
                        </a>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <Link to = "/login" >
                                <i className="fa fa-sign-out"></i>
                                <span className="nav-label">Выход</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default TopHeader