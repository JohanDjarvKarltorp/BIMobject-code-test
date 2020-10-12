'use strict';
const express = require('express');
const router = express.Router();
const omdb = require('../src/OMDb-api');
let data;

router.get('/', async (req, res) => {
    data = {
        title: 'BIMobject code test'
    };

    data.res = await omdb.homepage();

    res.render('index', data);
});

router.get('/search', async (req, res) => {
    data = {
        title: 'BIMobject code test'
    };

    const keyword = req.query.search;
    const results = await omdb.search(keyword);

    data.res = results.Search;

    console.log(data.res);

    res.render('index', data);
});

module.exports = router;
