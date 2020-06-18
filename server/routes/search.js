const { searchPuppeteer, searchGoogleAPI, searchHTML } = require('../common/search');
const keys = require('../constants/keys')


const app = app => {

    // Catches requests made to localhost:4000/
    app.get('/', (req, res) => res.send('Hello Monster!'));

    // Web scraping with puppeteer library
    get(app, '/puppeteer/search', searchPuppeteer)

    // Get results from the official google API. Free version includes only 10 results.
    get(app, '/google-api/search', searchGoogleAPI)

    // Get data from raw HTML / web scraping
    get(app, '/html/search', searchHTML)


}

// General method for getting data using selected method
const get = (app, path, method) => {
    app.get(path, (req, res) => {
        const query = req.query.q;
        if (!query) res.status(400).send("Provide a valid query value using the parameter 'q'.")
        
        // TODO: send status to client to resolve issue with google API limit error
        method(query)
            .then(results => res.status(200).send(results))
            .catch(err => res.status(500).send({ err: "Error retrieving data", message: err }));
    });
}


module.exports = app;