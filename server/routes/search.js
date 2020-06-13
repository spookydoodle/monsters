const axios = require('axios');
var DOMParser = require('xmldom').DOMParser;
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
        const results = await axios.get(`https://www.google.com/search?q=${query}&tbm=isch`);
        let parser = new DOMParser();
        let doc = parser.parseFromString(results.data, "text/html");
        // let serializer = new XMLSerializer();
        // let sXML = serializer.serializeToString(doc);    // to convert back to string
        // let imgs = doc.getElementsByName('img');
        console.log(doc.getElementsByTagName("img"))
        // console.log(sXML)
        res.send(results.data)
    });
}