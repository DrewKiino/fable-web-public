import React from 'react';
import * as styles from './Tags.module.scss';

const unverified = props => {
    const cols = ['Tag Name', 'Tag ID', 'Created At', 'Views', 'Stories', 'Episodes', 'Tags'];

    const header = cols.map(head => (
        <div className={styles.head} key={head}>{head}</div>
    ));

    return (
        <main>
            <React.Fragment>
                <section
                    className={[
                        styles['container-padding'],
                        styles['white-background'],
                        styles.grid,
                        styles['grey-border-bottom']].join(' ')
                    }
                >
                    {header}
                </section>
            </React.Fragment>
        </main>
    );
};

export default unverified;