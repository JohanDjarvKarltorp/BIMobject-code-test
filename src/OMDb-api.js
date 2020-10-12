'use strict';
const fetch = require('node-fetch');
const popularMovies = require('./most-popular-movies.json');

const url = 'http://www.omdbapi.com';
const key = 'cda0cff1';

const omdb = {
    homepage: async () => {
        return popularMovies.top10;
    },

    search: async (keyword) => {
        return await fetch(`${url}/?s=${keyword}&type=movie&apikey=${key}`)
            .then(res => res.json());
    },

    get: async (id) => {
        return await fetch(`${url}/?i=${id}&plot=full&apikey=${key}`)
            .then(res => res.json());
    },
};

module.exports = omdb;
