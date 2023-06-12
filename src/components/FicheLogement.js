import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Logement.json';
import Carrousel from './Carrousel';
import Profiluser from './Profiluser';
import TitleLogement from './TitleLogement';
import Tag from './Tag';
import Rating from './Rating';
import Collapse from './Collapse';

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
            <div className='firstLine'>
                <TitleLogement title={logement.title} subTitle={logement.location} />
                <Profiluser id={logement.id} profileImg={logement.host.picture} hostName={logement.host.name} />
            </div>

            <div className="secondLine">
                <Tag />
                <Rating rating={logement.rating} />
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