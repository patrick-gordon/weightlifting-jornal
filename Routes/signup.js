const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

//@Route POST api/signup
//@Description - Register new user
//@Access - Pulblic
router.post('/', (req, res) => {
    const { username, email, password} = req.body;
    if (!username || !email || !password) {
        return res.status(400),json({msg: 'Please enter all fields'})
    }

    User.findOne({ email })
    .then(user => {
        if(user) return res.status(400).json({ msg: 'User already exists'});

        const newUser = new User({
            username,
            email,
            password
        })
    })
})