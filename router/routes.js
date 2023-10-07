const {
  getHomePage, methodNotAllowed, getAbout, notFound, greetsUser, loginHandler,
} = require('../controller/handler');

const forbiddenMethod = ['POST', 'PUT', 'DELETE'];

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: getHomePage,
  },
  {
    method: 'GET',
    path: '/about',
    handler: getAbout,
  },
  {
    method: 'GET',
    path: '/hello/{username?}',
    handler: greetsUser,
  },
  {
    method: 'POST',
    path: '/login',
    handler: loginHandler,
  },
  {
    method: forbiddenMethod,
    path: '/{any*}',
    handler: methodNotAllowed,
  },
  {
    method: 'GET',
    path: '/{any*}',
    handler: notFound,
  },
];

module.exports = routes;
