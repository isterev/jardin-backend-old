"use strict";

const MarketOfferModel = require('../models/marketOffer');


const create = async (req, res) => {
    if (Object.keys(req.body).length === 0) return res.status(400).json({
        error: 'Bad Request',
        message: 'The request body is empty'
    });

    try {
      let marketOffer = await MarketOfferModel.create(req.body);

      return res.status(201).json(marketOffer)
    } catch(err) {
      return res.status(500).json({
        error: 'Internal server error',
        message: err.message
      });
    }
};

const read = async (req, res) => {
  try {
    let marketOffer = await MarketOfferModel.findById(req.params.id).exec();

    if (!marketOffer) return res.status(404).json({
      error: 'Not Found',
      message: `MarketOffer not found`
    });

    return res.status(200).json(marketOffer)
  } catch(err) {
    return res.status(500).json({
      error: 'Internal Server Error',
      message: err.message
    });
  }
};

const update = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
            error: 'Bad Request',
            message: 'The request body is empty'
        });
    }

    try {
      let marketOffer = await MarketOfferModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      }).exec();

      return res.status(200).json(marketOffer);
    } catch(err) {
      return res.status(500).json({
        error: 'Internal server error',
        message: err.message
      });
    }
};

const remove = async (req, res) => {
  try {
    await MarketOfferModel.findByIdAndRemove(req.params.id).exec();

    return res.status(200).json({message: `MarketOffer with id${req.params.id} was deleted`});
  } catch(err) {
    return res.status(500).json({
      error: 'Internal server error',
      message: err.message
    });
  }
};

const list  = async (req, res) => {
  try {
    let marketOffers = await MarketOfferModel.find({}).exec();

    return res.status(200).json(marketOffers);
  } catch(err) {
    return res.status(500).json({
      error: 'Internal server error',
      message: err.message
    });
  }
};


module.exports = {
    create,
    read,
    update,
    remove,
    list
};