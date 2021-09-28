const model = require("../models");
const router = require("express").Router();




router.get('/:symbol' ,getAll)
router.get('/:symbol/date/:dateS' ,getByDate)
router.get('/:symbol/dates/:dateS/:dateE' ,getBetweenDates)
router.get('/:symbol/ides/:firstId/:secondId' ,getBetweenIdes)



function getAll(req, res){
 const { symbol } = req.params;
    
    model.stockApi.getAll(symbol)
    .then((stock) => {
        
        res.json(stock)
        res.status(201)
        .end()
    })
    .catch(err => {
        console.log(err)
        res.send( { message: "Somthing went wrong !!" })
        res.status(500)
        .end()
         
    })

};


function getByDate(req, res){
    const { symbol, dateS } = req.params;
       
       model.stockApi.getByDate(symbol, dateS)
       .then((stock) => {
           
           res.json(stock)
           res.status(201)
           .end()
       })
       .catch(err => {
           console.log(err)
           res.send( { message: "Somthing went wrong !!" })
           res.status(500)
           .end()
            
       })         
}
  
function getBetweenDates(req, res){
        const { symbol, dateS, dateE } = req.params;
           
           model.stockApi.getBetweenDates(symbol, dateS, dateE)
           .then((stock) => {
               
               res.json(stock)
               res.status(201)
               .end()
           })
           .catch(err => {
               console.log(err)
               res.send( { message: "Somthing went wrong !!" })
               res.status(500)
               .end()
                
           })         
}

function getBetweenIdes(req, res){
    const { symbol, firstId, secondId } = req.params;
       
       model.stockApi.getBetweenIdes(symbol, firstId, secondId)
       .then((stock) => {
           
           res.json(stock)
           res.status(201)
           .end()
       })
       .catch(err => {
           console.log(err)
           res.send( { message: "Somthing went wrong !!" })
           res.status(500)
           .end()
            
       })         
}



module.exports = router