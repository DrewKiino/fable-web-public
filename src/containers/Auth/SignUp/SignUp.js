import React, { Component } from 'react';
import { connect } from 'react-redux';

import { NavLink, Redirect } from "react-router-dom"

import * as actions from '../../../store/actions';
import * as styles from './SignUp.module.scss';
import ContentFullHeight from '../../../hoc/ContentFullHeight/ContentFullHeight';


class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    change = ({ target }) => this.setState({ [target.name]: target.value })

    onSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password } = this.state;

        this.createUser({ firstName, lastName, email, password });
    }

    createUser = (accountInfo) => {
        const { createUser } = this.props;
        createUser(accountInfo);
    }

    checkFormConditions = () => {
        const {
            password,
            confirmPassword,
            firstName,
            lastName,
            email
        } = this.state;

        return (
            password === confirmPassword
            && firstName.length > 1 && lastName.length > 0
            && password.length > 5 && email.length > 3
        );
    }

    render() {
        const { isAuthenticated } = this.props;

        const style = {
            logInStyle: {
                'lineHeight': '.5em'
            }
        }

        return (
            <ContentFullHeight>
                {isAuthenticated ? <Redirect to="/stories" /> : null}
                <div className={styles.signup}>
                    <form className="mx-auto bg-light mt-5 h-100 w-75 p-3">

                        <div className="form-group">
                            <div className="row">

                                <div className="col-md">
                                    <label>First Name</label>
                                    <input className="form-control" name="firstName" placeholder='Enter first name' value={this.state.firstName} onChange={e => this.change(e)} />
                                </div>
                                <div className="col-md">
                                    <label>Last Name</label>
                                    <input className="form-control" name="lastName" placeholder='Enter last name' value={this.state.lastName} onChange={e => this.change(e)} />
                                </div>

                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input className="form-control" name="email" placeholder='Enter email' value={this.state.email} onChange={e => this.change(e)} />
                        </div>

                        <div className="form-group">
                            <label>Password</label> <p className="text-muted">Must be at least 6 characters</p>
                            <input className="form-control mb-2" name="password" type="password" placeholder='Enter password' value={this.state.password} onChange={e => this.change(e)} />
                            <input className="form-control mt-2" name="confirmPassword" type="password" placeholder='Confirm password' value={this.state.confirmPassword} onChange={e => this.change(e)} />
                        </div>

                        <button className="btn btn-primary w-100" onClick={e => this.onSubmit(e)} disabled={!this.checkFormConditions()}>
                            Create account
                    </button>

                    </form>

                    <div className="mt-2 text-center small" style={style.logInStyle}>
                        <p className="text-muted"> Already have an account? </p>
                        <NavLink to="/login">Log In Here</NavLink>
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
    createUser: (credentials) => dispatch(actions.createUser(credentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);