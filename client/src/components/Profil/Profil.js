import React from 'react'
import "./Profil.css"

const Profil = () => {
    return(
        <div className="pageProfil">
            <h2>Page Profil</h2>
            <h3>Prénom : JEAND-EDOUARD</h3>
            <h3>Nom : ADOUARD</h3>
            <h3>
                Ville : Pimpousse-les-bains, France
            </h3>
            <h3>Passion : J'AIME LE FROMAGE</h3>
            <button className="messageButton">Envoyer un message</button>
        </div>
    )
}

export default Profil;
