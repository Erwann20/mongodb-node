import {inject, observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import "./ListProfil.css"

const ListProfilContainer = ({userstore}) => {
    const [users, setUsers] = useState()

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

    return(
            <div className="listProfil">
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
                                        <Button size="small">Voir le profil</Button>
                                    </CardActions>
                                </Card>

                        ))

                    }
            </div>
    )
}

const ListProfil = inject('userstore')(observer(ListProfilContainer));

export default ListProfil;
