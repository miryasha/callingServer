const models = require('../models')
const router = require("express").Router();

const startCallingStocks = () => {
    
    models.callStock.callStocks()
              
};

startCallingStocks()