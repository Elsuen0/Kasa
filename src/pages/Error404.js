import React from 'react';
import Logo from '../components/Banner';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Error from '../components/Error';

const Error404 = () => {
    return (
        <div>
            <header>
                <Logo />
                <Navigation />
            </header>

            <main id='error404'>
                <Error />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Error404;