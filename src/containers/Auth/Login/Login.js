import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from "react-router-dom";

import * as actions from '../../../store/actions';
import * as styles from './Login.module.scss';
import ContentFullHeight from '../../../hoc/ContentFullHeight/ContentFullHeight';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.submitLogin(this.state.email, this.state.password)
    }

    //Firebase function login
    submitLogin = (email, password) => {
        const { login } = this.props;
        login(email, password);
    }

    render() {
        const { isAuthenticated } = this.props;
        const style = {
            backgroundStyle: {
                'borderRadius': '.4em'
            },
            signUpStyle: {
                'lineHeight': '.5em'
            }
        }

        return (
            <ContentFullHeight>
                {isAuthenticated ? <Redirect to="/stories" /> : null}
                <div className={styles.login}>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input name="email" value={this.state.email} onChange={(e) => this.change(e)} type="email" className="form-control" placeholder="Enter email"></input>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" value={this.state.password} onChange={e => this.change(e)} type="password" className="form-control" placeholder="Password"></input>
                        </div>

                        <button className="btn btn-primary w-100">Sign in</button>
                    </form>


                    <div className="mt-2 text-center small" style={style.signUpStyle}>
                        <p className="text-muted"> Don't have an account? </p>
                        <NavLink to="/signup">Sign Up Here</NavLink>
                    </div>
                </div>
            </ContentFullHeight>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.user !== null,
    user: auth.user
});

const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(actions.login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);