const controllers = require("../controllers");
const router = require("express").Router();
const limiter = require("../config/apiLimiter.confic");



//===API===
//Stock routes
////////////===========
router.use("/callcriteriastocktable", controllers.callCriteriaStockTable);
router.use("/api/stock", controllers.stockApi);



router.use("/", (req, res)=>{
    res.send("Hi from StockApi")
})



 module.exports = router;