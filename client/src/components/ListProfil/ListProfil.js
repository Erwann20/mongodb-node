import {inject, observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';

import "./ListProfil.css"

const ListProfilContainer = ({userstore}) => {
    const [users, setUsers] = useState();
    const [redirect, setRedirect] = useState();

    useEffect(() => {
        userstore.allUsers().then(e=> {
            setUsers(e)
        })
    },[])


    const deleteUser = (email) => {
        userstore.deleteUserByEmail(email).then((e) => {
            if (e.code === 201) {
                userstore.allUsers().then(e=> {
                    setUsers(e)
                })
            }
        })
    }

    const redirectSpecifyProfil = (email) => {
        userstore.getUserByEmail(email).then((user) => {
            if (user) {
                setRedirect(<Redirect
                        to={{
                            pathname: '/profil/',
                            state: { user },
                        }}
                />);
            }
        })
    }

    return(
            <div className="listProfil">
                    { redirect && redirect}
                    {

                        Array.isArray(users) && users.map((user, index)=> (
                                <Card variant="outlined" key={index}>
                                    <CardActions>
                                <Button size="small"  onClick={() => deleteUser(user.email)}>Supprimer</Button>
                                    </CardActions>
                                    <CardContent>
                                        <Typography variant="h5" component="h2" gutterBottom>
                                            {user.name}
                                        </Typography>
                                        <Typography color="textSecondary" >
                                            {user.email}
                                        </Typography>
                                        <Typography  color="textSecondary">
                                            {user.sexe}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => redirectSpecifyProfil(user.email)}  size="small">Voir le profil</Button>
                                    </CardActions>
                                </Card>

                        ))

                    }
            </div>
    )
}

const ListProfil = inject('userstore')(observer(ListProfilContainer));

export default ListProfil;
