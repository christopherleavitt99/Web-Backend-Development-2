const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

module.exports = router;
