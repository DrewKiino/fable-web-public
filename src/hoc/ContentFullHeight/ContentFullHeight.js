import React from 'react';
import * as styles from './ContentFullHeight.module.css';

const ContentFullHeight = props => (
    <div className={styles['content-full-height']}>
        {props.children}
    </div>
);

export default ContentFullHeight;