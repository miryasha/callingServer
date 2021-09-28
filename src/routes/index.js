const controllers = require("../controllers");
const router = require("express").Router();
const limiter = require("../config/apiLimiter.confic");



//start calling Daily
//================
router.use("/call", controllers.call)



//===API===
//Stock routes
////////////===========
router.use("/callcriteriastocktable", controllers.callCriteriaStockTable);
router.use("/api/stock", controllers.stockApi);



router.use("/", (req, res)=>{
    res.send("Hi from StockApi")
})



 module.exports = router;