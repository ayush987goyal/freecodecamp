var nodemailer = require('nodemailer'),
    debug = require('debug')('freecc:cntr:contact'),
    passportUtils = require('../utils/passportUtils'),
    secrets = require('../utils/secrets');

var transporter = nodemailer.createTransport({
  service: 'Mandrill',
  auth: {
    user: secrets.mandrill.user,
    pass: secrets.mandrill.password
  }
});

module.exports = function(app) {
  debug('setting up contact routes');
  var router = app.loopback.Router();

  router.get(
    '/done-with-first-100-hours',
    passportUtils.isAuthenticated,
    getDoneWithFirst100Hours
  );
  router.post(
    '/done-with-first-100-hours',
    passportUtils.isAuthenticated,
    postDoneWithFirst100Hours
  );

  function getDoneWithFirst100Hours(req, res) {
    if (req.user.points >= 53) {
      res.render('contact/done-with-first-100-hours', {
        title: 'Congratulations on finishing the first 100 hours of Free Code Camp!'
      });
    } else {
      req.flash('errors', {msg: 'Hm... have you finished all the challenges?'});
      res.redirect('/');
    }
  }

  function postDoneWithFirst100Hours(req, res) {
    var mailOptions = {
      to: 'team@freecodecamp.com',
      name: 'Completionist',
      from: req.body.email,
      subject: 'Camper at ' + req.body.email + ' has completed the first 100 hours',
      text: ''
    };

    transporter.sendMail(mailOptions, function (err) {
      if (err) {
        req.flash('errors', {msg: err.message});
        return res.redirect('/done-with-first-100-hours');
      }
      req.flash('success', {msg: 'Email has been sent successfully!'});
      res.redirect('/nonprofit-project-instructions');
    });
  }
  app.use(router);
};
