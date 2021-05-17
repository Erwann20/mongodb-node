import {makeAutoObservable} from 'mobx';


export class User {
    _email;
    _name;
    _password;
    _confirmPassword;

    constructor() {
        makeAutoObservable(this)
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name
    }

    get password() {
        return this._password;
    }

    set password(password) {
        this._password = password
    }

    get confirmPassword() {
        return this._confirmPassword;
    }

    set confirmPassword(confirmPassword) {
        this._confirmPassword = confirmPassword
    }

    isValid() {
        if (this._email && this._name && this._password === this._confirmPassword) {
            return true;
        } else {
            return false;
        }
    }

}
