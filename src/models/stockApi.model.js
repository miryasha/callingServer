const Base = require("./base.model");
const CryptoJS = require("crypto-js");
const mysql = require("mysql");

require('dotenv').config();
const key = process.env.ALPHA_KEY
const dbKey = process.env.PASS_HASH_DATABASE


class StockApi extends Base {

    getAll(symbol){
           return  this.getCriteria(symbol)
           .then( async (data) => {
               
            if(data.length !== 0){

                let i = 0;
                const symbol = await data.map( s => s.symbol);
                
                const cryptoDatabase_name = await data.map( dbn => dbn.database_name)[i]; 
                
                // Decrypt database_name
                //const decryptDatabase_name  = await CryptoJS.AES.decrypt(cryptoDatabase_name, dbKey);
                //const database_name = await decryptDatabase_name.toString(CryptoJS.enc.Utf8);
                
                const table_name = await data.map( tbl => tbl.table_name)[i]; 

                const cryptoHost = await data.map( h => h.host)[i]; 
                // Decrypt host
                //const decryptHost  = await CryptoJS.AES.decrypt(cryptoHost, dbKey);
                //const host = await decryptHost.toString(CryptoJS.enc.Utf8);
                

                const port = await data.map( p => p.port)[i]; 
                const user = await data.map( u => u.user)[i]; 

                const cryptoPassword = await data.map( pass => pass.password)[i]; 
                // Decrypt pass
                //const decryptPass  = await CryptoJS.AES.decrypt(cryptoPassword, dbKey);
                //const password = await decryptPass.toString(CryptoJS.enc.Utf8);
                

                const dbCongig = await mysql.createConnection({
        
                host: cryptoHost,
                port: port,//port
                user: user,//username
                password: cryptoPassword,//password
                database: cryptoDatabase_name,//database
                
                });
                
                            
                    return new Promise((resolve, reject) => {
                        let sql =  `SELECT * FROM  ${symbol} WHERE symbol="${symbol}"`
                        dbCongig.query(sql, function(error, results){
                            if(error){ return reject(error.sqlMessage); }
                            else {
                                return resolve(results);
                            }
                        })
                        dbCongig.end()
                    });
            
        
            } else {
                return {"message" : "stock.modelThere is no record!"}
            }
            
      });//==end of second data   
                
    }

    getBetweenDates(symbol, dateS, dateE){
        return  this.getCriteria(symbol)
        .then( async (data) => {
         let i = 0;
         const symbol = await data.map( s => s.symbol);
         
         const cryptoDatabase_name = await data.map( dbn => dbn.database_name)[i]; 
         // Decrypt database_name
         const decryptDatabase_name  = await CryptoJS.AES.decrypt(cryptoDatabase_name, dbKey);
         const database_name = await decryptDatabase_name.toString(CryptoJS.enc.Utf8);
         
         const table_name = await data.map( tbl => tbl.table_name)[i]; 
         const cryptoHost = await data.map( h => h.host)[i]; 
         // Decrypt host
         const decryptHost  = await CryptoJS.AES.decrypt(cryptoHost, dbKey);
         const host = await decryptHost.toString(CryptoJS.enc.Utf8);

         const port = await data.map( p => p.port)[i]; 
         const user = await data.map( u => u.user)[i]; 
         const cryptoPassword = await data.map( pass => pass.password)[i]; 
         // Decrypt pass
         const decryptPass  = await CryptoJS.AES.decrypt(cryptoPassword, dbKey);
         const password = await decryptPass.toString(CryptoJS.enc.Utf8);

         const dbCongig = await mysql.createConnection({
 
            host: cryptoHost,
            port: port,//port
            user: user,//username
            password: cryptoPassword,//password
            database: cryptoDatabase_name,//database
           
         });
      
                       
             return new Promise((resolve, reject) => {
                 let sql =  `SELECT * FROM  ${symbol} WHERE symbol_date BETWEEN "${dateS}" AND "${dateE}"  `;
                 dbCongig.query(sql, function(error, results){
                     if(error){ return reject(error); }
                     else {
                         return resolve(results);
                     }
                 })
                 dbCongig.end()
             });
      
   
   });//==end of second data   
             
 }


 getBetweenIdes(symbol, firstId, secondId){
    return  this.getCriteria(symbol)
    .then( async (data) => {
     let i = 0;
     const symbol = await data.map( s => s.symbol);
     
     const cryptoDatabase_name = await data.map( dbn => dbn.database_name)[i]; 
     // Decrypt database_name
     const decryptDatabase_name  = await CryptoJS.AES.decrypt(cryptoDatabase_name, dbKey);
     const database_name = await decryptDatabase_name.toString(CryptoJS.enc.Utf8);

     const table_name = await data.map( tbl => tbl.table_name)[i]; 
     const cryptoHost = await data.map( h => h.host)[i]; 
     // Decrypt host
     const decryptHost  = await CryptoJS.AES.decrypt(cryptoHost, dbKey);
     const host = await decryptHost.toString(CryptoJS.enc.Utf8);

     const port = await data.map( p => p.port)[i]; 
     const user = await data.map( u => u.user)[i]; 
     const cryptoPassword = await data.map( pass => pass.password)[i]; 
     // Decrypt pass
     const decryptPass  = await CryptoJS.AES.decrypt(cryptoPassword, dbKey);
     const password = await decryptPass.toString(CryptoJS.enc.Utf8);

     const dbCongig = await mysql.createConnection({

        host: cryptoHost,
        port: port,//port
        user: user,//username
        password: cryptoPassword,//password
        database: cryptoDatabase_name,//database
       
     });
  
                   
         return new Promise((resolve, reject) => {
             let sql =  `SELECT * FROM  ${symbol} WHERE ${symbol}_id BETWEEN "${firstId}" AND "${secondId}"  `;
             dbCongig.query(sql, function(error, results){
                 if(error){ return reject(error); }
                 else {
                     return resolve(results);
                 }
             })
             dbCongig.end()
         });
  

   });//==end of second data   

 }

 
 getByDate(symbol, dateS){
    return  this.getCriteria(symbol)
    .then( async (data) => {
     let i = 0;
     const symbol = await data.map( s => s.symbol);
     
     const cryptoDatabase_name = await data.map( dbn => dbn.database_name)[i]; 
     // Decrypt database_name
     //const decryptDatabase_name  = await CryptoJS.AES.decrypt(cryptoDatabase_name, dbKey);
     //const database_name = await decryptDatabase_name.toString(CryptoJS.enc.Utf8);

     const table_name = await data.map( tbl => tbl.table_name)[i]; 

     const cryptoHost = await data.map( h => h.host)[i]; 
     // Decrypt host
     //const decryptHost  = await CryptoJS.AES.decrypt(cryptoHost, dbKey);
     //const host = await decryptHost.toString(CryptoJS.enc.Utf8);

     const port = await data.map( p => p.port)[i]; 
     const user = await data.map( u => u.user)[i]; 

     const cryptoPassword = await data.map( pass => pass.password)[i]; 
     // Decrypt pass
     //const decryptPass  = await CryptoJS.AES.decrypt(cryptoPassword, dbKey);
     //const password = await decryptPass.toString(CryptoJS.enc.Utf8);

     const dbCongig = await mysql.createConnection({
         
        host: cryptoHost,
        port: port,//port
        user: user,//username
        password: cryptoPassword,//password
        database: cryptoDatabase_name,//database
       
     });
  
                   
         return new Promise((resolve, reject) => {
             let sql =  `SELECT * FROM  ${symbol} WHERE symbol_date="${dateS}" `;
             dbCongig.query(sql, function(error, results){
                 if(error){ return reject(error); }
                 else {
                     return resolve(results);
                 }
             })
             dbCongig.end()
         });
  

});//==end of second data   
         
}

 
getCriteria(symbol){                 
   
    return this.query(`SELECT * FROM call_criteria_stock_tbl WHERE symbol="${symbol}"`);
}

    
  }
  module.exports = StockApi;