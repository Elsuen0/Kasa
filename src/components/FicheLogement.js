import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Logement.json';
import Carrousel from './Carrousel';

const FicheLogement = () => {
    const { id } = useParams();
    const logement = data.find(logement => logement.id === id);

    return (
        <div>
            {logement ? (

                <Carrousel id={logement.id} images={logement.pictures} />

            ) : (
                <div>
                    {/* Message d'erreur ou redirection */}
                    <h1>Logement non trouvé</h1>
                </div>
            )}
        </div>
    );
};

export default FicheLogement;