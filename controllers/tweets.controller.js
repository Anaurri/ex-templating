// Iteration 3: import tweets data
const tweetsDB = require('../data/tweets');
// Iteration 3: list tweets from file
module.exports.list = (req, res, next) => {
  
  const { user } = req.query; // igual a "const user = req.query.user"
  const tweets = tweetsDB
  // Order tweets desc by date
    .sort((t1, t2) => t2.createdAt - t1.createdAt)
  // Iteration 4: filter tweets by user checking the query param 'name'
    .filter(tweet => user ? tweet.user.includes(user) : true);

  res.render('tweets/list', {
    tweets: tweets,
    user: user,
  });
}

// Iteration 5: Create tweet validating body params
module.exports.create = (req, res, next) => {
    const { user, message } = req.body;

    if (!user || !message) {
      const errors = {};
      if(!user) {
        errors.user = 'User is Mandatory';
      }
      if(!message) {
        errors.message = 'Message is mandatory';
      }

      res.render('tweets/list', {
        tweet: req.body,
        errors: errors
      })
    } else {
      tweetsDB.push({
        user: user,
        message: message,
        createdAt: new Date()
      })
      res.redirect('/tweets');
    }  
}

// Iteration 6: find tweet by id path param and delete it if exists
module.exports.delete = (req, res, next) => {}