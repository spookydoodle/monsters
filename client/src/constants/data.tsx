import {StateType } from '../logic/types'
import monstersService from '../services/monsters'

// Define here state values to initialize the App with
const INITIAL_STATE: StateType = {
    user: undefined,
    whoAmIRequestDone: false,
    mode: "light",
    query: 'furry+monster',
    data: [],
}

// Temp categories used as search words
const CATEGORIES = ['Giant', 'Pink', 'Cute', 'Art', 'Little', 'Friendly', 'Mythical']

// Below three methods should return results in the same shape
const { getGoogleAPI, getGoogleHTML, getGoogleScrape } = monstersService;
const SEARCH_METHODS = {
    "Puppeteer": getGoogleScrape, 
    "Google API": getGoogleAPI, 
    "HTML": getGoogleHTML,
};

const PATHS = {
    root: "/",
    landing: "/",
    home: "/home",
    login: "/login",
    logout: "/logout",
    register: "/register",
    main: "/feed",
    animations: "/anim",
}

export { INITIAL_STATE, PATHS, CATEGORIES, SEARCH_METHODS }