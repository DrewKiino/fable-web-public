import React from 'react';
import * as styles from './AllUsers.module.scss';

const allUsers = props => {
    const cols = ['Image', 'First Name', 'Last Name', 'User ID', 'Created On', 'Stories', 'Following', 'Followers', 'Views', 'Likes'];
    const { data } = props;
    console.log(data)

    const header = cols.map(head => (
        <div className={styles.head} key={head}>{head}</div>
    ));

    const cardStrip = data.map(user => (
        <section
            className={[styles['container-padding'],
            styles['white-background'],
            styles.grid,
            styles.cursor,
            styles.cardstrip].join(' ')}
        >
            <img className={styles.avatar} src={user.avatar} />
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.userId}</div>
            <div>{user.createdAt}</div>
            <div>{user.stories.length}</div>
            <div>{user.following.length}</div>
            <div>{user.followers.length}</div>
            <div>{user.views.length}</div>
            <div>{user.likes.length}</div>
        </section>
    ));

    return (
        <main>
            <section
                className={[
                    styles['container-padding'],
                    styles['white-background'],
                    styles.grid,
                    styles['grey-border-bottom']].join(' ')
                }>
                {header}
            </section>
            {cardStrip}
        </main>
    );
};

export default allUsers;