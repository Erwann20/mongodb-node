import {inject, observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import "./Profil.css"

const ProfilContainer = ({userstore, location}) => {
    const [user, setUser] = useState();
    const [isCurrentUser, setIsCurrentUser] = useState(true);
    const [isModificate, setIsModificat] = useState(false);

    useEffect(() => {

        if (location.state) {
            setUser(location.state.user)
            setIsCurrentUser(false);
        } else {
            userstore.getCurrentUser().then(e=> {
                setUser(e)
                userstore.userRegister = e;
            })
        }

    },[])

    const modifyUser = () => {
        userstore.modifyUser().then((e) => {
            userstore.getCurrentUser().then(e=> {
                setUser(e)
                userstore.userRegister = e;
                setIsModificat(false)
            })
        })
    }

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
                        {
                            isCurrentUser ?
                            <>
                                <Button color="primary" onClick={() => setIsModificat(!isModificate)} >{
                                    !isModificate ? <>Modifier mon profil</>
                                    : <>Voir mon profil</>
                                }</Button>
                                <TextField disabled={!isModificate} onChange={(e) => userstore.userRegister.name = e.target.value  } id="outlined-basic" defaultValue={user.name} label="Nom " variant="outlined" />
                                <TextField disabled={!isModificate} onChange={(e) => userstore.userRegister.sexe = e.target.value  } id="outlined-basic" defaultValue={user.sexe} label="Sexe " variant="outlined" />
                                <TextField type="date" disabled={!isModificate} onChange={(e) => userstore.userRegister.birthday = e.target.value  } id="outlined-basic" defaultValue={user.birthday} variant="outlined" />
                                <TextField disabled={!isModificate} onChange={(e) => userstore.userRegister.city = e.target.value  } id="outlined-basic" defaultValue={user.city} label="Ville " variant="outlined" />

                                <Button color="primary" onClick={() => modifyUser()} >{
                                    isModificate && <>Valider</>
                                }</Button>
                            </>
                            :
                            <>
                                <h3>Nom : {user.name}</h3>
                                <label>Sexe : {user.sexe}</label>
                                <label>
                                    {age(user.birthday)} ans
                                </label>
                                <label>Mail : {user.email}</label>
                                <label>
                                    Ville : {user.city}
                                </label>
                            </>
                        }
                    </div>
                }
            </>
    )
}

const Profil = inject('userstore')(observer(ProfilContainer));


export default Profil;
