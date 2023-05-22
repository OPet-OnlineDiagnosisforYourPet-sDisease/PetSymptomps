const express = require('express');
const router = express.Router();
const { postGejala, getGejala } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/gejala',
    handler: postGejala,
  },
  {
    method: 'GET',
    path: '/gejala',
    handler: getGejala,
  },
];

routes.forEach((route) => {
  if (route.method === 'POST') {
    router.post(route.path, route.handler);
  } else if (route.method === 'GET') {
    router.get(route.path, route.handler);
  }
});

module.exports = router;