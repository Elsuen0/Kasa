import React from 'react';
import Logo from '../components/Banner';
import Footer from '../components/Footer';
import TopBackground from '../components/TopBackground';
import Card from '../components/Card';
import data from '../Logement.json';

const Home = () => {
    const nombreLogementAAfficher = 6;
    const logementsAAfficher = data.slice(0, nombreLogementAAfficher);

    return (
        <div className='stylePrincipal'>
            <header>
                <Logo />
            </header>

            <main>
                <TopBackground image="./imageSource1.png" h1='Chez vous, partout et ailleurs' className='topBackground' />
                <div className="app">

                    {logementsAAfficher.map((logement, index) => (
                        <Card key={logement.id} id={logement.id} nom={logement.title} photo={logement.cover} className={`card-${index + 1}`} />
                    ))}

                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;