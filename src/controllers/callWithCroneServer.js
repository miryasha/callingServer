const models = require('../models')


const startCallingStocks = () => {
    
    models.callStock.callStocks()
              
};

startCallingStocks()