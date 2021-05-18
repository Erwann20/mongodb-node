import {observer, inject} from 'mobx-react';
import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  './App.css'

const AppContainer = ({userstore}) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const user = userstore.userRegister;
    const history = useHistory();

    useEffect(() => {
        if (userstore.userIsSave) {
            loginUser();
        }
    }, [userstore.userIsSave])

    const loginUser = () => {
         if (email && password) {
             const obj = {
                 "email": email,
                 "password": password
             }
             userstore.loginUser(obj).then((e) => {
                 if (e) {
                     window.location.href = "/list-profil"
                 }
             })
         }
    }

    return (
       <div>
           {
               !isLogin ?
               <div className="formRegister">

                   <div className="form-item">
                       <TextField  onChange={(e) => user.name = e.target.value  } id="outlined-basic" label="Nom" variant="outlined" />
                   </div>
                   <div className="form-item">
                       <TextField  onChange={(e) => {
                           user.email = e.target.value
                           setEmail(e.target.value)
                       } } id="outlined-basic" label="Email" variant="outlined" />
                   </div>
                   <div className="form-item">
                       <TextField type="date" onChange={(e) => user.birthday = e.target.value  } id="outlined-basic"  variant="outlined" />

                   </div>
                   <div className="form-item">
                       <TextField onChange={(e) => user.city = e.target.value  } id="outlined-basic" label="Ville" variant="outlined" />

                   </div>
                   <div className="form-item">
                       <TextField onChange={(e) => user.sexe = e.target.value  } id="outlined-basic" label="Sexe" variant="outlined" />
                   </div>
                   <div className="form-item">
                       <TextField type="password" onChange={(e) => user.password = e.target.value  } id="outlined-basic" label="Mot de passe " variant="outlined" />
                   </div>
                   <div className="form-item">
                       <TextField type="password" onChange={(e) => {
                           user.confirmPassword = e.target.value
                           setPassword(e.target.value)
                       } } id="outlined-basic" label="Confirmation mot de passe" variant="outlined" />
                   </div>

                   <Button variant="contained" color="primary" onClick={() => userstore.registerUser()}>
                       S'enregistrer
                   </Button>

               </div>
                   :
                <div className="formRegister">
                   <div className="form-item">
                       <TextField  onChange={(e) => setEmail(e.target.value)  } id="outlined-basic" label="Email" variant="outlined" />
                   </div>
                   <div className="form-item">
                       <TextField type="password"  onChange={(e) => setPassword(e.target.value)  } id="outlined-basic" label="Mot de passe" variant="outlined" />
                   </div>
                   <Button variant="contained" color="primary" onClick={() => loginUser()}>
                       Connexion
                   </Button>
               </div>
           }


           <div className="toggleForm">
               {
                   isLogin ? <a onClick={() => setIsLogin(!isLogin)}>Je veux m'identifier</a>
                           : <a onClick={() => setIsLogin(!isLogin)}>Je veux me connecter</a>
               }
           </div>



       </div>
    )
}

const App = inject('userstore')(observer(AppContainer));


export default App;
