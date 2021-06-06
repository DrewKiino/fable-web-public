import React from 'react';
import * as styles from './Episodes.module.scss';

const episodes = props => {
    const { episodes } = props;
    console.log(episodes)
    const cols = ['Episode #', 'Episode ID', 'Created At', 'Status', 'Episodes'];
    const header = cols.map(col => (
        <div className={styles.grey} key={col}>{col}</div>
    ));


    const cardStrip = episodes.map(episode => (
        <section className={[styles['container-padding'], styles['grey-background'], styles.grid].join(' ')}>
            <div>Episode {episode.episode}</div>
            <div>{episode.id}</div>
            <div>{episode.createdAt}</div>
            <div>
                {
                    episode.verified ?
                        <div className={[styles.published, styles['orange-background'], styles['round-edges'], styles.center].join(' ')}>Published</div> :
                        <div className={[styles.unverified, styles['blue-background'], styles['round-edges'], styles.center].join(' ')}>Unverified</div>
                }
            </div>
            <select>
                <option>Actions</option>
            </select>
        </section>
    ));

    return (
        <React.Fragment>
            <section className={[styles['container-padding'], styles['grey-background'], styles.grid].join(' ')}>
                {header}
            </section>
            {cardStrip}
        </React.Fragment>
    );
};

export default episodes;