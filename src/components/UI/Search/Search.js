import React from 'react';
import * as styles from './Search.module.scss';

const search = props => (
    <section className={[styles.filter, styles['container-padding'], styles['light-gray']].join(' ')}>
        <input className={styles.input} type="text" placeholder={props.placeholder} onChange={props.onChange} />
    </section>
);

export default search;