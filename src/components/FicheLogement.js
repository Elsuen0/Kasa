import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Logement.json';
import Carrousel from './Carrousel';
import Profiluser from './Profiluser';
import TitleLogement from './TitleLogement';
import Tag from './Tag';
import Rating from './Rating';
import Collapse from './Collapse';


// Définition du composant ficheLogement
const FicheLogement = () => {
    // Récupération de l'ID du logement à partir des paramètres de l'url
    const { id } = useParams();

    // Recherche du logement correspondant à l'ID spécifié
    const logement = data.find(logement => logement.id === id);

    return (
        <div className='ficheLogement_width'>

            {/*Vérification si le logement existe */}
            {logement ? (

                // Affichage di Caroussel avec les images du logement
                <Carrousel id={logement.id} images={logement.pictures} />

            ) : (
                <div>
                    <h1>Logement non trouvé</h1>
                </div>
            )}
            <div className='firstLine_secondLine'>
                <div className='firstLine'>
                    <TitleLogement title={logement.title} subTitle={logement.location} />
                    <Tag />

                </div>

                <div className="secondLine">
                    <Profiluser id={logement.id} profileImg={logement.host.picture} hostName={logement.host.name} />
                    <Rating rating={logement.rating} />
                </div>
            </div>

            <div className="thirdLine">
                <Collapse className='collapse_logement collapse' name="Description" content={logement.description} />
                <Collapse className='collapse_logement collapse' name="Équipements" content={logement.equipments.map((equipment, index) => (
                    <ul key={index}>{equipment}</ul>
                ))} />
            </div>
        </div>
    );
};

export default FicheLogement;