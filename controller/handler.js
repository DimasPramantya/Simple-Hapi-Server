/* eslint-disable no-unused-vars */
const getHomePage = (req, h) => 'Homepage';

const methodNotAllowed = (req, h) => {
  const res = h.response({
    message: 'Method Not Allowed',
  });
  res.code(405);
  return res;
};

const getAbout = (req, h) => {
  const res = h.response({
    message: 'About page',
  });
  res.code(200);
  return res;
};

const notFound = (req, h) => {
  const res = h.response({
    message: 'Halaman tidak ditemukan',
  });
  res.code(404);
  return res;
};

const greetsUser = (req, h) => {
  const { username = 'strangers' } = req.params;
  const { lang } = req.query;

  let dataResponse = {};
  if (lang === 'id') {
    dataResponse = {
      message: `Hai ${username}!`,
    };
  } else {
    dataResponse = {
      message: `Hello ${username}!`,
    };
  }
  const res = h.response(dataResponse);

  res.code(200);

  return res;
};

const loginHandler = (req, h) => {
  const { username, password } = req.payload;

  const res = h.response({
    message: `Welcome ${username}`,
  });

  res.code(200);

  return res;
};

module.exports = {
  getHomePage,
  getAbout,
  notFound,
  methodNotAllowed,
  greetsUser,
  loginHandler,
};
