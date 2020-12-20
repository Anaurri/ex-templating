const path = require('path');
const hbs = require('hbs');

// Iteration 2: register partials
hbs.registerPartials(path.join(__dirname, '../views/partials'));


// Iteration 2: register active helper for nav
hbs.registerHelper('active', (path, hint) => {
    return path === hint ? 'active' : '';
});
// // Iteration 3: register date helper for tweets
// ment().endOf('day').fromNow();          // in 9 hours

// mohbs.registerHelper('active', (path, hint) => {
