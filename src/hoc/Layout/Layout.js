import React, { Component } from 'react';

import * as styles from './Layout.module.css';

import Navbar from '../../components/Navigation/Navbar/Navbar';
import Sidepanel from '../../components/Navigation/Sidepanel/Sidepanel';
import LoadingScreen from '../../components/UI/LoadingScreen/LoadingScreen';

class Layout extends Component {
    state = {
        loading: true
    }

    componentDidMount() {
        setTimeout(this.handleLoading, 2000);
    }

    handleLoading = () => {
        this.setState({ loading: false });
    }

    render() {
        const { loading } = this.state;

        return (
            <div className={styles.layout}>
                <LoadingScreen loading={loading} />
                <header>
                    <Navbar />
                    <Sidepanel />
                </header>

                <main className={styles.content}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;