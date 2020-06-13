const puppeteer = require('puppeteer');

const searchGoogleIm = async (searchQuery) => {
    const url = `https://www.google.com/search?q=${searchQuery}&tbm=isch&num=20`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // TODO: (Optionally) click on an image and wait for the preview with url in the source to load
    // await page.$eval('input[name=btnK]', button => button.click());
    // await page.waitFor(durationInMilliseconds)
    // await page.waitForSelector('selector');
    const results = await page.evaluate(() => {
        return [...document.querySelector('.islrc').querySelectorAll("img")]
            .filter(img => img.src.length > 0)
            .map(img => ({
                    title: img.alt,
                    src: img.src,
                })
            )
    })

    await browser.close();

    return results;
};

module.exports = searchGoogleIm;