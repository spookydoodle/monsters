const { searchPuppeteer, searchGoogleAPI, searchHTML } = require('../common/search');
const keys = require('../constants/keys')


const app = app => {

    app.get('/', (req, res) => {
        res.status(200).send("Welcome")
    })

    // Web scraping with puppeteer library
    get(app, '/api/puppeteer/search', searchPuppeteer)

    // Get results from the official google API. Free version includes only 10 results.
    get(app, '/api/google-api/search', searchGoogleAPI)

    // Get data from raw HTML / web scraping
    get(app, '/api/html/search', searchHTML)


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