var Client = require('node-rest-client').Client,
  debug = require('debug')('freecc:cntr:bonfires'),
  resources = require('../utils/resources'),
  secrets = require('../utils/secrets'),
  passportUtils = require('../utils/passportUtils'),
  generalUtils = require('../utils/generalUtils'),
  client = new Client();

module.exports = function(app) {
  debug('setting up resources routes');
  var router = app.loopback.Router();
  router.get('/nonprofits', nonprofits);
  router.get('/help-for-everyone-else', helpForEveryoneElse);
  router.get('/how-can-free-code-camp-help-you', howCanFreeCodeCampHelpYou);

  function nonprofits(req, res) {
    res.render('nonprofits/home', {
      title: 'Nonprofit Projects'
    });
  }

  function helpForEveryoneElse(req, res) {
    res.render('nonprofits/help-for-everyone-else', {
      title: 'Help for Everyone Else'
    });
  }

  function howCanFreeCodeCampHelpYou(req, res) {
    res.render('nonprofits/how-can-free-code-camp-help-you', {
      title: 'How Can Free Code Camp Help You'
    });
  }

  app.use(router);
};
