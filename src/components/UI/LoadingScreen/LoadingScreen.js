import React from 'react';
import * as styles from './LoadingScreen.module.scss';

const loadingScreen = ({ loading }) => {
    return (
        loading && (
            <div className={styles.loading}>
                <div className={styles['loading__text']}>
                    Fable
                </div>
            </div>
        )
    );
};

export default loadingScreen;
