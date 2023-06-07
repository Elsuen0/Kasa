import React from 'react';
import Logo from '../components/Banner';
import Footer from '../components/Footer';
import FicheLogement from '../components/FicheLogement';
import data from '../Logement.json';
import { useParams } from 'react-router-dom';
import Error404 from './Error404';

const Logements = () => {
    const { id } = useParams();
    const logement = data.find(logement => logement.id === id);

    return (
        <div>
            {
                logement ? (

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
                    </div >

                ) : (
                    <div>
                        {/* Message d'erreur ou redirection */}
                        <Error404 />
                    </div>
                )}
        </div>
    );
};

export default Logements;