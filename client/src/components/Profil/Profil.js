import {inject, observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import "./ListProfil.css"
import "./Profil.css"

const Profil = ({userstore}) => {
    const [user, setUser] = useState()

    useEffect(() => {
        userstore.getCurrentUser().then(e=> {
            setUser(e)
        })
    },[])

    return(
        <div className="pageProfil">
            <h2>Page Profil</h2>
            <h3>Nom : {user.name}</h3>
            <h3>Mail : {user.email}</h3>
            <h3>
                Ville : {/*user.city*/}
            </h3>
            <h3>Passion : {/*user.passion*/}</h3>
            <button className="messageButton">Envoyer un message</button>
        </div>
    )
}


export default Profil;
