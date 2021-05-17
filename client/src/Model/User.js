import {makeAutoObservable} from 'mobx';


export class User {
    _email;
    _name;
    _password;
    _confirmPassword;
    _birthday;
    _city;
    _sexe;

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


    get birthday() {
        return this._birthday;
    }

    set birthday(birthday) {
        this._birthday = birthday;
    }

    get city() {
        return this._city;
    }

    set city(city) {
        this._city = city;
    }

    get sexe() {
        return this._sexe;
    }

    set sexe(sexe) {
        this._sexe = sexe;
    }

    isValid() {
        if (this._email && this._name && this._birthday && this._city && this._sexe
            && this._password === this._confirmPassword) {
            return true;
        } else {
            return false;
        }
    }

}
