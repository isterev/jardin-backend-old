"use strict";

const mongoose = require('mongoose');

const MarketOfferSchema  = new mongoose.Schema({

    creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        index: true
    },

    category: {
        type: String,
        enum : ['SEEDS_SMALL_PLANTS','FERTILISERS', 'MECHANICAL_EQUIPMENT',
                'ELECTRONIC_EQUIPMENT', 'OTHERS'],
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: String,

    denomination: {
        type: String,
        enum : ['UNIT','PER_KG', 'PER_GRAM', 'PER_DAY'],
        required: true
    },

    pricePerUnit:  {
        type: Number,
        required: true
    },
    productImage: mongoose.Schema.Types.Buffer // mongoose.Schema.Types.Mixed

});

MarketOfferSchema.set('versionKey', false);
MarketOfferSchema.set('timestamps', true);

module.exports = mongoose.model('MarketOffer', MarketOfferSchema);