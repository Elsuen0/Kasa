import React from 'react';



const Profiluser = ({ id, profileImg, hostName }) => {
    return (
        <div className='profile_settings'>
            <h3>{hostName}</h3>
            <img src={profileImg} alt="" />
            {console.log(id)}
        </div>
    );
};

export default Profiluser;