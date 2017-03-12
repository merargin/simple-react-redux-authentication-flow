import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { loginUser } from '../actions/actionCreators';
import { getToken } from '../localStorage';
import { connect } from 'react-redux';

export class LoginPage extends Component{

  componentWillMount() {
    const token = getToken();
    if(token !== null){
      browserHistory.push('/home');
    }
  }

  constructor(props) {
    super(props);
  };

  render(){

    return (
      <div className="Absolute-Center is-Responsive">
        <div className="col-sm-12 col-md-10 col-md-offset-1">
          <form action="" className="login-form" action="#" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-group input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
              <input className="form-control" type="text" name='email' placeholder="email" ref={node => { this.email = node }}/>
            </div>
            <div className="form-group input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
              <input className="form-control" type="password" name='password' placeholder="password" ref={node => { this.password = node }}/>
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-def btn-block" value="Login" />
            </div>
          </form>
        </div>
      </div>
    );

  }

  handleSubmit(e) {
      e.preventDefault();
      this.props.loginUser({
        email: this.email.value,
        password: this.password.value
      });
   }
}

LoginPage = connect(null, { loginUser })(LoginPage);

export default LoginPage;
