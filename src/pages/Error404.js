import React from 'react';
import Logo from '../components/Banner';
import Footer from '../components/Footer';
import Error from '../components/Error';
import Navigation from '../components/Navigation';

const Error404 = () => {
    return (
        <div className='errorHeader_settings'>
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