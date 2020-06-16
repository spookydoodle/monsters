const puppeteer = require('puppeteer');
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const keys = require('../constants/keys')

const { searchPuppeteer, searchGoogleAPI, searchHTML } = require('./search');

// All three methods receive one parameter 'query' 
// and should return results in the same shape => Array of objects with two properties of type string: 'title' and 'src'
const methods = {
    "Puppeteer": searchPuppeteer, 
    "Google API": searchGoogleAPI, 
    "HTML": searchHTML,
};

Object.keys(methods).forEach(name => {

    test(`${name}: Provide query 'monster' to receive an array of objects with properties 'title' and 'src' of type string`, async () => {
        jest.setTimeout(20000);
        let results = await methods[name]('monster');

        expect(typeof results).toBe(typeof Array());
        expect(results.length).toBeGreaterThan(0);
        expect(typeof results[randInt(results.length)]).toBe(typeof Object());
        expect(typeof results[randInt(results.length)].title).toBe(typeof String());
        expect(typeof results[randInt(results.length)].src).toBe(typeof String());

        // Check property names
        ['title', 'src'].forEach(prop => expect(Object.keys(results[randInt(results.length)])).toContain(prop))

    });


    test(`${name}: Check if src is in format 'data:...'`, async () => {
        jest.setTimeout(20000);
        const results = await methods[name]('monster');
        const prefix = results[randInt(results.length)].src.substring(0, 4)
        expect(['http', 'data']).toContain(prefix);
    });

})

const randInt = n => Math.floor(Math.random() * n)