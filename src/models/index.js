const connection = require('../config/dataBase.config');

const StockApi = require("./stockApi.model")
const CallCriteriaStockTable = require("./callCriteriaStockTable.model")



module.exports = {
  
  stockApi : new StockApi(connection),
  callCriteriaStockTable : new CallCriteriaStockTable(connection),
  
  }