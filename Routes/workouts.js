const express = require('express');
const router = express.Router();
const auth = require('')

const Workouts = require('../models/Workouts')

//@Route GET api/workouts
//@Desctiption GET users logged workouts 
//@Access Restricted
router.get('/', auth, (req,res) => {

})