const controllers = require("../controllers");
const router = require("express").Router();
const limiter = require("../config/apiLimiter.confic");



//start calling Daily
//================
router.use("/call", controllers.call)



router.use("/", (req, res)=>{
    res.send("Hi from callingServer")
})



 module.exports = router;