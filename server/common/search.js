const puppeteer = require('puppeteer');
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const keys = require('../constants/keys')

// Info: https://dev.to/waqasabbasi/building-a-search-engine-api-with-node-express-and-puppeteer-using-google-search-4m21
// TODO: pull additional keywords by which you can search by. These go to the 'chips' parameter ('chips=q:...g_1:...')
// the same result as adding the additional keyword in front of the query
const searchPuppeteer = async query => {
    if (!query) return []

    const url = `https://www.google.com/search?q=${query}&tbm=isch&num=20`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // TODO: (Optionally) click on an image and wait for the preview with url in the source to load
    // await page.$eval('input[name=btnK]', button => button.click());
    // await page.waitFor(durationInMilliseconds)
    // await page.waitForSelector('selector');
    const results = await page.evaluate(() => {
        const container = document.querySelector('.islrc');
        return container ? [...container.querySelectorAll("img")]
            .filter(img => img.src.length > 0)
            .map(img => ({
                title: img.alt,
                src: img.src,
            })
            ) : []
    })

    await browser.close();

    return results;
};

// Get results from the official Google API. Free version includes only 10 results.
const searchGoogleAPI = query => {
    if (!query) return []

    return axios.get(`https://www.googleapis.com/customsearch/v1?q=${query}&cx=${keys.cx}&key=${keys.key}&searchType=image`)
        .then(results => results.data.items.map(({ title, link }) => ({
            title: title,
            src: link,
        })))
        .catch(err => err)
}

// Get raw HTML and pull HTML elements properties. Only 20 results returned.
const searchHTML = async query => {
    if (!query) return []

    return axios
        .get(`https://www.google.com/search?q=${query}&tbm=isch`)
        .then(results => {
            const data = results.data;
            const dom = new JSDOM(data);
            const tables = [...dom.window.document.querySelectorAll("table")]

            // Third table on the page contains image results. 
            // If google changed html structure and less than 3 tables returned, then set resultsTables to an empty array 
            const resultsTables = tables.length > 2 ? [...tables[2].querySelectorAll("table")] : []

            return resultsTables.map(table => {
                const rows = table.querySelectorAll("tr");

                // Expecting two rows (image, title). Return an empty object if received a different table structure
                return rows.length === 2 ? {
                    title: table.querySelectorAll("tr")[1].querySelectorAll("span")[1].textContent.replace("...", ""),
                    src: table.querySelectorAll("tr")[0].querySelector("img").src,
                } : {}
            })
        })
        .catch(err => err)

    // TODO: test 1: Check for an empty array = Google changed table structure in html
    // TODO: test 2: checl for an array of empty objects = Google changed row structure in the image results table
}

module.exports = {
    searchPuppeteer: searchPuppeteer,
    searchGoogleAPI: searchGoogleAPI,
    searchHTML: searchHTML,
};