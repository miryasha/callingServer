const connection = require('../config/dataBase.config');

const CallStock = require("./callStock.model");



module.exports = {
  
  callStock : new CallStock(connection), 
  
  }