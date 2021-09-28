const model = require("../models");
const router = require("express").Router();




router.get('/getall' , getAll)
router.post('/insert' , insert)
router.delete('/delete' , deleteRow)
router.put('/update' , update)
router.get('/create' , create)

function getAll(req, res){
 
    
    model.callCriteriaStockTable.getAllCriterias()     
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


function insert(req, res){
    const { symbol,  database_name, table_name, host, port , user, password } =  req.body;
    
    model.callCriteriaStockTable.insert({symbol,  database_name, table_name, host, port , user, password})   
    .then((stock) => {
        
        res.json(stock)
        res.status(201)
        .end()
    })
    .catch(err => {
        console.log(err)
        res.send( { message: "Somthing went wrong on inserting!!" })
        res.status(500)
        .end()
         
    })

};


function deleteRow(req, res){
    const { call_criteria_stock_id } =  req.body;
    
    model.callCriteriaStockTable.deleteById(call_criteria_stock_id)  
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


function update(req, res){
    const {call_criteria_stock_id, symbol,  database_name, table_name, host, port , user, password } =  req.body;
    
    model.callCriteriaStockTable.update(call_criteria_stock_id,symbol,  database_name, table_name, host, port , user, password)   
    .then((stock) => {
        
        res.json(stock)
        res.status(201)
        .end()
    })
    .catch(err => {
        console.log(err)
        res.send( { message: "Somthing went wrong on inserting!!" })
        res.status(500)
        .end()
         
    })

};

function create(req, res){
 
    
    model.callCriteriaStockTable.createTable()
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






module.exports = router