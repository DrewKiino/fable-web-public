import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as styles from './Users.module.scss';
import ContentFullHeight from '../../hoc/ContentFullHeight/ContentFullHeight';
import Search from '../../components/UI/Search/Search';
import AllUsers from '../../components/Users/AllUsers/AllUsers';

class Users extends Component {
    render() {
        const {users} = this.props;
        return (
            <ContentFullHeight>
                <div className={styles.white}>
                    <div className={styles.users}>Users</div>
                </div>
                <Search placeholder="Search by Title, Tags, Keywords" onChange={this.handleChange} />
                <section>
                    <Switch>
                        <Route
                            path="/users/all"
                            render={props => <AllUsers {...props} data={users} />}
                        />
                        <Redirect to="/users/all" />
                    </Switch>
                </section>
            </ContentFullHeight>
        );
    }
}

const mapStateToProps = ({users}) => ({
    users: users.users
});

export default connect(mapStateToProps)(Users);