// This service file runs image search websites
// by keywords 'furry monster' and pulls image addresses 
// of found images thumbnails.
// These image url's are added to the monster json generator

// Search for this app (images): 
// https://www.google.com/search?q=furry+monster&tbm=isch

// Allow user to select color or other features cute/humanoid
// https://www.google.com/search?q=furry+monster&tbm=isch&chips=q:furry+monster,g_1:pink

// select features from textContent of spans by class name "hIOe2"
// Click on images and get url from element with clsss n3VNCb
import axios from 'axios';

export default {
    // Using puppeteer
    getGoogleScrape: async (query: string) => {
        let res = await axios.get(`/api/puppeteer/search?q=${query}`);
        return res.data || [];
    },
    // Using custom google search api (only 10 in free version)
    getGoogleAPI: async (query: string) => {
        let res = await axios.get(`/api/google-api/search?q=${query}`);
        return res.data || [];
    },
    // Using html selectors
    getGoogleHTML: async (query: string) => {
        let res = await axios.get(`/api/html/search?q=${query}`);
        return res.data || [];
    }
};