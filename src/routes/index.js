const express = require('express'),
router = express.Router();
const { collectionEjercitos } = require('../views/components/createEjercitos');

router.get('/', (req, res) => {
    res.render('../views/modules/index');
})

router.get('/api', (req, res) => {
    res.json(collectionEjercitos);
})

module.exports = router; 