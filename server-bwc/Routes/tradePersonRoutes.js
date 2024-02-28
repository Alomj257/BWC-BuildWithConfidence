const express = require('express');
const tradePersonRoutes= require("express").Router();
const tradePersonController = require('../Controller/tradePersonController');

// Get all trade persons
tradePersonRoutes.get('/', tradePersonController.getAllTradePersons);

// Get trade person by ID
tradePersonRoutes.get('/:id', tradePersonController.getTradePersonById);

// Create a new trade person
tradePersonRoutes.post('/', tradePersonController.createTradePerson);

// Update trade person by ID
tradePersonRoutes.put('/:id', tradePersonController.updateTradePerson);

// Delete trade person by ID
tradePersonRoutes.delete('/:id', tradePersonController.deleteTradePerson);

module.exports = tradePersonRoutes;
