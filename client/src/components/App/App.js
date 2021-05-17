import {observer, inject} from 'mobx-react';
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const AppContainer = ({userstore}) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const user = userstore.userRegister;
    const history = useHistory();


    const loginUser = () => {
         if (email && password) {
             const obj = {
                 "email": email,
                 "password": password
             }
             userstore.loginUser(obj).then((e) => e && history.push('/list-profil'))
         }
    }

    return (
       <div>
           {
               !isLogin ?
               <div className="formRegister">
                   <div className="form-item">
                       <label>Nom</label>
                       <input onChange={(e) => user.name = e.target.value }/>
                   </div>
                   <div className="form-item">
                       <label>Email</label>
                       <input onChange={(e) => user.email = e.target.value }/>
                   </div>
                   <div className="form-item">
                       <label>Mot de passe</label>
                       <input type="password" onChange={(e) => user.password = e.target.value }/>
                   </div>
                   <div className="form-item">
                       <label>Confirmation mot de passe</label>
                       <input type="password" onChange={(e) => user.confirmPassword = e.target.value }/>
                   </div>
                   <button onClick={() => userstore.registerUser()}>S'enregistrer</button>
               </div>
                   :
                <div className="formRegister">
                   <div className="form-item">
                       <label>Email</label>
                       <input onChange={(e) => setEmail(e.target.value) }/>
                   </div>
                   <div className="form-item">
                       <label>Mot de passe</label>
                       <input type="password" onChange={(e) => setPassword(e.target.value) }/>
                   </div>
                    <button onClick={() => loginUser()}>Connexion</button>
               </div>
           }

           {
               isLogin ? <a onClick={() => setIsLogin(!isLogin)}>Je veux m'identifié</a>
                       : <a onClick={() => setIsLogin(!isLogin)}>Je veux me connecter</a>
           }

       </div>
    )
}

const App = inject('userstore')(observer(AppContainer));


export default App;
