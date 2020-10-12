'use strict';
const fetch = require('node-fetch');
const popularMovies = require('./most-popular-movies.json');

const url = 'http://www.omdbapi.com';
const key = 'cda0cff1';

const omdb = {
    homepage: async () => {
        return popularMovies.top10;
        //return await Promise.all(popularMovies.ids.map(async id => await omdb.get(id)));
    },

    get: async (id) => {
        return await fetch(`${url}/?i=${id}&apikey=${key}`).then(res => res.json());
    }
};

omdb.homepage();

module.exports = omdb;
