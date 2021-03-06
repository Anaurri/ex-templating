const path = require('path');
const hbs = require('hbs');
const moment = require('moment');
const { sort } = require('../data/tweets');

// Iteration 2: register partials
hbs.registerPartials(path.join(__dirname, '../views/partials'));


// Iteration 2: register active helper for nav
hbs.registerHelper('active', (path, hint) => {
    if (path === hint) {
        return 'active'
    } else {
        return ''
    }
});
// // Iteration 3: register date helper for tweets
// ment().endOf('day').fromNow();          // in 9 hours

// mohbs.registerHelper('active', (path, hint) => {
