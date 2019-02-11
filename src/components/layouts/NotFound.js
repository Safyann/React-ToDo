import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';

export default class NotFound extends Component {
  render() {
    let wrapperClass = "gray-bg";
    return (
      <div className={wrapperClass}>
        <div className="middle-box text-center animated fadeInDown">
          <h1>404</h1>
          <h3 className="font-bold">Страница не найдена</h3>
          <div className="error-desc">
            Вернуться на <Link to='/'>главную</Link>?
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