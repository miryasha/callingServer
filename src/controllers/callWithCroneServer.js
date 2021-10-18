const router = require("express").Router();

const models = require('../models')

 
    
    

 

const startCallingStocks = () => {
    
  models.callStock.callStocks()
      
 };

 startCallingStocks()

 
module.exports = router