const { searchPuppetier, searchGoogleAPI, searchHTML } = require('../common/search');
const keys = require('../constants/keys')


const app = app => {

    // Catches requests made to localhost:4000/
    app.get('/', (req, res) => res.send('Hello Monster!'));


    // Web scraping with puppeteer library
    app.get('/puppeteer/search', (req, res) => {
        const query = req.query.q;
        if (!query) res.status(400).send("Provide a valid query value using the parameter 'q'.")

        searchPuppetier(query)
            .then(results => res.status(200).send(results))
            .catch(err => res.status(500).send({ err: "Error retrieving data", message: err }));
    });


    // Get results from the official google API. Free version includes only 10 results.
    app.get('/google-api/search', (req, res) => {
        const query = req.query.q;
        if (!query) res.status(400).send("Provide a valid query value using the parameter 'q'.")

        searchGoogleAPI(query)
            .then(results => res.status(200).send(results))
            .catch(err => res.status(500).send({ err: "Error retrieving data", message: err }));
    });


    // Get data from raw HTML / web scraping
    app.get('/html/search', (req, res) => {
        const query = req.query.q;
        if (!query) res.status(400).send("Provide a valid query value using the parameter 'q'.")

        searchHTML(query)
            .then(results => res.status(200).send(results))
            .catch(err => res.status(500).send({ err: "Error retrieving data", message: err }));
    });
}

module.exports = app;