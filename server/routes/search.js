const axios = require('axios');
var DOMParser = require('xmldom').DOMParser;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// var XMLSerializer = require('xmldom').XMLSerializer;
const searchGoogleIm = require('../searchGoogleIm');
const keys = require('../constants/keys')

// TODO: do with axios, this solution is too slow
module.exports = app => {

    // Catches requests made to localhost:3000/
    app.get('/', (req, res) => res.send('Hello Monster!'));

    // Catches requests made to http://localhost:4000/puppeteer/search?q=xyz
    app.get('/puppeteer/search', (req, res) => {
        const query = req.query.q;

        query != null ? (
            searchGoogleIm(query)
                .then(results => {
                    res.status(200);
                    res.json(results);
                })
                .catch(err => res.send(err))
        ) : res.end()
    });

    app.get('/custom-google/search', (req, res) => {
        const query = req.query.q;
        axios.get(`https://www.googleapis.com/customsearch/v1?q=${query}&cx=${keys.cx}&key=${keys.key}&searchType=image`)
            .then(results => {
                // Transform results to the format expected on client
                const finalResults =
                    results.data.items.map(({ title, link }) => ({
                        title: title,
                        src: link,
                    }));
                
                res.status(200).send(finalResults);
            })
            .catch(err => res.status(500).send({ err: "Error retrieving data", message: err }))
    });

    app.get('/html/search', async (req, res) => {
        const query = req.query.q;
        if(!query) res.status(400).send("Provide a valid query value using the parameter 'q'.")


        // TODO: try another library, results from axios do not match actual results from google
        // TODO: Get more than 20 results
        const results = await axios.get(`https://www.google.com/search?q=${query}&tbm=isch`);
        
        const data = results.data;
        const dom = new JSDOM(data);
        const allTables = [...dom.window.document.querySelectorAll("table")]

        // Third table on the page contains results. 
        // Results consist of more tables with two rows: first one with the image, second with the title
        const resultsTables = [...allTables[2].querySelectorAll("table")]
        const finalResults = resultsTables.map(table => {
            const rows = table.querySelectorAll("tr");
            return { 
                title: rows[1].querySelectorAll("span")[1].textContent.replace("...", ""), 
                src: rows[0].querySelector("img").src, 
            }
        })

        res.status(200).send(finalResults)
        // res.status(200).send(results.data)
    });
}