import React from 'react';
import * as styles from './Navbar.module.scss';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';


const navbar = props => {
    const { isAuthenticated } = props;

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Fable</div>
            <div>
                {/* <NavLink className={styles['link']} to={{ pathname: '/homepage' }}>Home</NavLink> */}
                {isAuthenticated ? <Link className={styles['link']} to={{pathname: '/logout'}}>Logout</Link> :
                    <React.Fragment>
                        <Link className={styles['link']} to="/login">Login</Link>
                        <Link className={styles['link']} to="/signup">Signup</Link>
                    </React.Fragment>
                }
            </div>
        </nav>
    );
};

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.user !== null
});

export default connect(mapStateToProps)(navbar);