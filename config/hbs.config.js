const path = require('path');
const hbs = require('hbs');
const moment = require('moment');

// Iteration 2: register partials
hbs.registerPartials(path.join(__dirname, '../views/partials'));


// Iteration 2: register active helper for nav
hbs.registerHelper('active', (path, hint) => {
    return path === hint ? 'active' : '';
});
// // Iteration 3: register date helper for tweets
hbs.registerHelper('date', (date) => {
    return moment(date).startOf().fromNow();
});


