import React from 'react';
import * as styles from './Sidepanel.module.scss';

import { NavLink } from 'react-router-dom';

const sidepanel = props => (
    <nav className={styles.sidepanel}>
        <div className={styles['menu-text']}>
            Menu
        </div>
        <div className={styles.links}>
            <NavLink className={styles.link} activeClassName={styles.active} to="/stories">Stories</NavLink>
            <NavLink className={styles.link} activeClassName={styles.active} to="/users">Users</NavLink>
        </div>
    </nav>
);

export default sidepanel;