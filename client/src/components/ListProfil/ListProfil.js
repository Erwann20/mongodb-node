import {inject, observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import "./ListProfil.css"

const ListProfilContainer = ({userstore}) => {
    const [users, setUsers] = useState()

    useEffect(() => {
        userstore.allUsers().then(e=> {
            setUsers(e)
        })
    },[])

    return(
            <div className="listProfil">
                <div className="profilCard">
                    {
                        Array.isArray(users) && users.map((user, index)=> (
                                <div className="contenuProfil" key={index}>
                                    <h3>{user.name}</h3>
                                    <h3>{user.email}</h3>
                                    <button className="profilButton"> Voir le profil </button>
                                </div>
                        ))

                    }
                </div>
            </div>
    )
}

const ListProfil = inject('userstore')(observer(ListProfilContainer));

export default ListProfil;
