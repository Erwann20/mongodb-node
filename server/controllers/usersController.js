const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require("config");

const { createJWT } = require("../utils/auth");
const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

exports.signup = (req, res, next) => {
    let { name, email, password, password_confirmation, date, birthday, city, sexe } = req.body;
    let errors = [];

    if (!name) {
        errors.push({ name: "required" });
    } if (!email) {
        errors.push({ email: "required" });
    } if (!emailRegexp.test(email)) {
        errors.push({ email: "invalid" });
    } if (!password) {
        errors.push({ password: "required" });
    } if (!password_confirmation) {
        errors.push({
            password_confirmation: "required",
        });
    } if (password != password_confirmation) {
        errors.push({ password: "mismatch" });
    } if (errors.length > 0) {
        return res.status(422).json({ errors: errors });
    }
    if (!date) {
        errors.push({date: "required"})
    }
    if (!birthday) {
        errors.push({birthday: "required"})
    }
    if (!city) {
        errors.push({city: "required"})
    }
    if (!sexe) {
        errors.push({sexe: "required"})
    }

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                return res.status(422).json({ errors: [{ user: "email already exists" }] });
            } else {
                const user = new User({
                    name: name,
                    email: email,
                    password: password,
                    date: date,
                    birthday: birthday,
                    city: city,
                    sexe: sexe
                }); bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(password, salt, function (err, hash) {
                        if (err) throw err;
                        user.password = hash;
                        user.save()
                            .then(response => {
                                res.status(200).json({
                                    success: true,
                                    result: response
                                })
                            })
                            .catch(err => {
                                res.status(500).json({
                                    errors: [{ error: err }]
                                });
                            });
                    });
                });
            }
        }).catch(err => {
            res.status(500).json({
                errors: [{ error: 'Something went wrong' }]
            });
        })
}

exports.signin = (req, res) => {
    let { email, password } = req.body;
    let errors = [];
    if (!email) {
        errors.push({ email: "required" });
    }
    if (!emailRegexp.test(email)) {
        errors.push({ email: "invalid email" });
    }
    if (!password) {
        errors.push({ passowrd: "required" });
    }
    if (errors.length > 0) {
        return res.status(422).json({ errors: errors });
    }
    User.findOne({ email: email }).then(user => {
        if (!user) {
            return res.status(404).json({
                errors: [{ user: "not found" }],
            });
        } else {

            bcrypt.compare(password, user.password).then(isMatch => {

                if (!isMatch) {
                    return res.status(400).json({
                        errors: [{
                            password:
                                "incorrect"
                        }]
                    });
                }
                let access_token = createJWT(
                    user.email,
                    user._id,
                    3600
                );
                jwt.verify(access_token, config.get("jwtSecret"), (err, decoded) => {
                    if (err) {
                        res.status(500).json({ erros: err });
                    }
                    if (decoded) {
                        return res.status(200).json({
                            success: true,
                            token: access_token,
                            message: user
                        });
                    }
                });
            }).catch(err => {
                res.status(500).json({ errors: "test" });
            });
        }
    }).catch(err => {
        res.status(500).json({ erros: err });
    });
}

exports.editProfil = (req, res) => {
    let { name, email } = req.body; 
    let errors = [];
    if (!email) {
        errors.push({ email: "required" });
    } 
    if (!emailRegexp.test(email)) {
        errors.push({ email: "invalid email" });
    }
    if (errors.length > 0) {
        return res.status(422).json({ errors: errors });
    }
    let updatedUser = {
        email: email,
        name: name
    }
    User.findOneAndUpdate(
        { email: email },
        { $set: updatedUser},
        { new: true },
        (err, docs) => {
          if (!err) res.send(docs);
          else console.log("Update error : " + err);
        }
    ).catch(err => {
        res.status(500).json({ erros: err });
    });
}

exports.getUser = (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            return res.status(500).json({ errors: "not exist" });
        } else {
            return res.json(user)
        }
    })
}

exports.getUsers = (req, res) => {
    User.find().then(user => {
        if (!user) {
            return res.status(500).json({ errors: "There is no users" });
        } else {
            return res.json(user)
        }
    })
}
