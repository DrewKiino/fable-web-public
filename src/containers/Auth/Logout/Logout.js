import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../../store/actions';

class Logout extends Component {
    componentWillMount() {
        const {logout} = this.props;
        logout();
    }

    render() {
        return <Redirect to="/login" />
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(actions.logout())
});

export default connect(null, mapDispatchToProps)(Logout);