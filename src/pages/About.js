import React from 'react';
import Logo from '../components/Banner';
import Footer from '../components/Footer'
import TopBackground from '../components/TopBackground';
import Collapse from '../components/Collapse';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div className='stylePrincipal'>
            <header>
                <Logo />
                <Navigation />
            </header>

            <main className='main_about'>
                <TopBackground className='topBackground topBackground_about' image={'./kalen.png'} />
                <div className='collapse_settings'>
                    <Collapse className={'collapse'} name='Fiabilité' content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' />
                    <Collapse className={'collapse'} name='Respect' content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
                    <Collapse className={'collapse'} name='Service' content="Kasa est site de réservation de logement qui facilite la recherche et la réservation de logements en ligne, offrant une plateforme sécurisée pour les voyageurs et les propriétaires. Vos informations sont cryptées et protégées par des mesures de sécurité avancées, garantissant la confidentialité de vos données personnelles et de vos transactions. Notre équipe travaille continuellement pour maintenir la fiabilité et l'intégrité de notre plateforme, afin de vous offrir une expérience de réservation sereine et sans souci" />
                    <Collapse className={'collapse'} name='Sécurité' content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default About;