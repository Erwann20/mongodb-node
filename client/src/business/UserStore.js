import { makeAutoObservable } from 'mobx';
import {User} from '../Model/User';

export class UserStore {
    _userRegister;
    _userIsSave;

    constructor() {
        this._userRegister = new User()
        makeAutoObservable(this)
    }

    get userRegister() {
        return this._userRegister;
    }


    registerUser() {
        const obj = {
            "name": this._userRegister.name,
            "email": this._userRegister.email,
            "password": this._userRegister.password,
            "password_confirmation": this._userRegister.confirmPassword
        }

        if (this._userRegister.isValid()) {
            fetch(`http://localhost:5500/auth/signup`, {
                headers: new Headers({
                                         'Content-Type': 'application/json',
                                     }),
                redirect: 'follow',
                method: 'POST',
                body: JSON.stringify(obj),
            }).then((e) => {
                this._userIsSave = e.code
            })
        }
    }

    loginUser(obj) {

        return new Promise((resolve) => {
            fetch(`http://localhost:5500/auth/signin`, {
                headers: new Headers({
                     'Content-Type': 'application/json',
                 }),
                redirect: 'follow',
                method: 'POST',
                body: JSON.stringify(obj),
            }).then((e) => e.json())
              .then((res) => {
                  sessionStorage.setItem('jwtToken', res.token);
                  resolve(res.token)
              });
        })
    }

    allUsers() {
        return new Promise((resolve) => {
            fetch(`http://localhost:5500/auth/users`, {
                headers: new Headers({
                                         'Content-Type': 'application/json',
                                     }),
                redirect: 'follow',
                method: 'GET',
            }).then((e) => e.json())
              .then((res) => {
                  resolve(res)
              });
        })
    }
}
