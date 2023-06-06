import React from 'react';
import Logo from '../components/Banner';
import Footer from '../components/Footer';
import Error from '../components/Error';

const Error404 = () => {
    return (
        <div>
            <header>
                <Logo />
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