import {inject, observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import "./Profil.css"

const ProfilContainer = ({userstore}) => {
    const [user, setUser] = useState()

    useEffect(() => {
        userstore.getCurrentUser().then(e=> {
            setUser(e)
        })
    },[])

    const age = (birthDate) => {
        const diff = Date.now() - new Date(birthDate).getTime();
        const age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970);
    }
    return(
            <>
                {
                    user &&
                    <div className="pageProfil">
                        <h3>Nom : {user.name}</h3>
                        <label>Sexe : {user.sexe}</label>
                        <label>
                            {age(user.birthday)} ans
                        </label>
                        <label>Mail : {user.email}</label>
                        <label>
                            Ville : {user.city}
                        </label>
                    </div>
                }
            </>
    )
}

const Profil = inject('userstore')(observer(ProfilContainer));


export default Profil;
