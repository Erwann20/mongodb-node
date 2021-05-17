import { makeAutoObservable } from 'mobx';
import {User} from '../Model/User';
import jwt_decode from 'jwt-decode';

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
            if (!sessionStorage.getItem('jwtToken') || sessionStorage.getItem('jwtToken') !== undefined) {
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
            }
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

    getCurrentUser() {
        return new Promise((resolve) => {
            fetch(`http://localhost:5500/auth/userByEmail`, {
                headers: new Headers({
                     'Content-Type': 'application/json',
                 }),
                redirect: 'follow',
                method: 'POST',
                body: JSON.stringify({
                    'email': jwt_decode(sessionStorage.getItem('jwtToken')).email
                }),
            }).then((e) => e.json())
              .then((res) => {
                  resolve(res)
              });
        })
    }
}
