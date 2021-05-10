const express = require('express');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const router = express.Router();
const cityController = require('../controllers/cities.controllers');

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://connor-letko.us.auth0.com/.well-known/jwks.json',
  }),
  audience: 'https://final/api',
  issuer: 'https://connor-letko.us.auth0.com/',
  algorithms: ['RS256'],
});

// Retrieve all employees
router.get('/', cityController.findAll);

// Create a new employee
router.post('/', cityController.create);

// Retrieve a single employee with id
router.get('/:id', cityController.findById);

// Update a employee with id
router.put('/:id', cityController.update);

// Delete a employee with id
router.delete('/:id', cityController.delete);

module.exports = router;
