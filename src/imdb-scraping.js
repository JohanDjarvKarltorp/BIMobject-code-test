'use strict';
const promise = require('request-promise');
const $ = require('cheerio');

const imdb = {
    popular: () => {
        const url = 'https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm';

        promise(url)
            .then(function(html) {
                const imdbsIds = [];
                const list = $('.lister-list', html);

                for (let i = 0; i < list.children().length; i++) {
                    let link = $('.titleColumn > a', html)[i].attribs.href;

                    imdbsIds.push(getID(link));
                }
                console.log(imdbsIds);
            })
            .catch(function(err) {
                console.log(err);
            });
    }
};

let getID = (link) =>  {
    const regex = /tt[0-9]+/;

    return link.match(regex)[0];
};

imdb.popular();

module.exports = imdb;
