"use strict";

const express  = require('express');
const router   = express.Router();

const middlewares    = require('../middlewares');
const MarketOfferController = require('../controllers/marketOffer');


router.get('/', MarketOfferController.list);
router.post('/', middlewares.checkAuthentication, MarketOfferController.create);
router.get('/:id', MarketOfferController.read);
router.put('/:id', middlewares.checkAuthentication, MarketOfferController.update);
router.delete('/:id', middlewares.checkAuthentication, MarketOfferController.remove);


module.exports = router;