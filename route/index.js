'use strict';
const express = require('express');
const router = express.Router();
//const NAME = require('../src/NAME.js');
let data;

router.get('/', async (req, res) => {
    data = {
        title: 'BIMobject code test'
    };

    //data.res = await NAME.showAll();
    data.res = "Hello world";
    res.render('index', data);
});

module.exports = router;
