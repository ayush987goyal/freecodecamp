/* eslint no-unused-vars: 0 */
var React = require('react'),

    // react router
    Router = require('react-router'),
    Route = Router.Route,
    NotFound = Router.NotFoundRoute,
    DefaultRoute = Router.DefaultRoute,

    // # Components
    App = require('./App.jsx'),
    Bonfires = require('./bonfires'),
    Nonprofits = require('./nonprofits'),
    Chat = require('./chat');

var routes = (
  <Route
    name='app'
    path='/'
    handler={ App }>

    <Route
      name='bonfires'
      path='/bonfires/?:bonfires?'
      handler={ Bonfires } />

    <Route
      name='chat'
      path='/chat'
      handler={ Chat } />

    <Route
      name='nonprofits'
      path='/nonprofits'
      handler= { Nonprofits } />

    <DefaultRoute
      handler={ Bonfires } />
  </Route>
);

module.exports = function(Location) {
  return Router.create({
    routes: routes,
    location: Location
  });
};
