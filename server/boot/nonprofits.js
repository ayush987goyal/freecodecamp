var React = require('react'),
// moment = require('moment'),
  debug = require('debug')('freecc:cntr:nonprofits'),
// generalUtils = require('../utils/generalUtils'),
// bonfireUtils = require('../utils/bonfireUtils'),

// ## React/Flux
  Router = require('../../common/components/Router.jsx'),
  ContextStore = require('../../common/components/context/Store'),
  ContextActions = require('../../common/components/context/Actions');

module.exports = function(app) {

  app.get('/nonprofits', function(req, res, next) {
    debug('path req', decodeURI(req.path));
    Router(decodeURI(req.path))
      .run(function(Handler, state) {
        Handler = React.createFactory(Handler);

        debug('Route found, %s ', state.path);

        var ctx = {
          req: req,
          res: res,
          next: next,
          Handler: Handler,
          state: state,
          userId: req.session ? req.session.userId : null
        };

        debug('context action');
        ContextActions.setContext(ctx);
      });
  });

  app.get('/chat', function(req, res, next) {
    debug('path req', decodeURI(req.path));
    Router(decodeURI(req.path))
      .run(function(Handler, state) {
        Handler = React.createFactory(Handler);

        debug('Route found, %s ', state.path);

        var ctx = {
          req: req,
          res: res,
          next: next,
          Handler: Handler,
          state: state,
          userId: req.session ? req.session.userId : null
        };

        debug('context action');
        ContextActions.setContext(ctx);
      });
  });
  //ContextStore
  //  .filter(function(ctx) {
  //    return !!ctx.Handler;
  //  })
  //  .subscribe(function(ctx) {
  //
  //    debug('rendering %s to string', ctx.state.path);
  //    var html = React.renderToString(ctx.Handler());
  //
  //    debug('rendering jade');
  //    ctx.res.render('react-layout', { html: html }, function(err, markup) {
  //      if (err) { return ctx.next(err); }
  //      debug('jade template rendered');
  //
  //      debug('Sending %s to user', ctx.state.path);
  //      return ctx.res.send(markup);
  //    });
  //  });

};
