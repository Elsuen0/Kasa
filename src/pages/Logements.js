import React from 'react';
import Logo from '../components/Banner';
import Footer from '../components/Footer';
import FicheLogement from '../components/FicheLogement';

const Logements = () => {
    return (
        <div>
            <header>
                <Logo />
            </header>

            <main>
                <FicheLogement />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Logements;