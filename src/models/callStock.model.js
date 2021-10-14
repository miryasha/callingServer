const Base = require("./base.model");
const CryptoJS = require("crypto-js");
const mysql = require("mysql");
const fetch = require('node-fetch');
const axios = require('axios');
const https = require('https')

require('dotenv').config();
const key = process.env.ALPHA_KEY
const dbKey = process.env.PASS_HASH_DATABASE


class CallStock  extends Base{

  callStocks(){
    const list = this.findStockList()
    .catch(err => {
      console.log(err);
      
      });
    list.then( data => {
      
        const symbolsLength = data.map( s => s.symbol).length;
        //Check if the list is not empty
        console.log(symbolsLength)
          if(symbolsLength !==0 ){
            for(let i = 0 ; i < symbolsLength ; i++){
              
              task(i);
               
             }//end of for
    
              function task(i) {
               setTimeout(  () => {
                const symbol =  data.map( s => s.symbol)[i];
                const time_frame =  data.map( tf => tf.time_frame)[i];
                const cryptoDatabase_name =  data.map( dbn => dbn.database_name)[i]; 
                // Decrypt database_name
                //const decryptDatabase_name  = await CryptoJS.AES.decrypt(cryptoDatabase_name, dbKey);
               // const database_name = await decryptDatabase_name.toString(CryptoJS.enc.Utf8);
    
                const table_name =  data.map( tbl => tbl.table_name)[i]; 
                const cryptoHost =  data.map( h => h.host)[i]; 
                // Decrypt host
                //const decryptHost  = await CryptoJS.AES.decrypt(cryptoHost, dbKey);
                //const host = await decryptHost.toString(CryptoJS.enc.Utf8);
    
                const port =  data.map( p => p.port)[i]; 
                const user =  data.map( u => u.user)[i]; 
                const cryptoPassword =  data.map( pass => pass.password)[i]; 
                // Decrypt pass
                //const decryptPass  = await CryptoJS.AES.decrypt(cryptoPassword, dbKey);
                //const password = await decryptPass.toString(CryptoJS.enc.Utf8);
    
                const dbCongig =  mysql.createConnection({
        
                    host: cryptoHost,
                    port: port,//port
                    user: user,//username
                    password: cryptoPassword,//password
                    database: cryptoDatabase_name,//database
                  
                });

                const getFirstUserData = async () => {
                  
                  const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=${key}`) // get users list
                  const dataJson = await response.json() // parse JSON

                  const metaSymbol = await String(dataJson["Meta Data"]["2. Symbol"]) 
                  const lastRefreshed = await String(dataJson["Meta Data"]['3. Last Refreshed']);
                  const ohlcData = await dataJson["Time Series (Daily)"][lastRefreshed];
                  const opening = await ohlcData["1. open"];
                  const high = await ohlcData["2. high"];
                  const low = await ohlcData["3. low"];
                  const closing = await ohlcData["4. close"];
                  
                  console.log(ohlcData)
                }
                
                getFirstUserData()
                .catch(err => {
                  console.log(err);
                  
                })
                //  const endPoint = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=${key}`
                //  const req = https.request(endPoint, res => {
                //   console.log(`statusCode: ${res.statusCode}`)
                   

                //   res.on('data', d => {
                //    // process.stdout.write(d)
                //    console.log(json(d))
                    
                    
                //   })
                // })
                
                // req.on('error', error => {
                //   console.error(error)
                // })
                
                // req.end()




                //  const response =   fetch(endPoint)
                //  const dataJson = response.then(res => res.json())
                //  console.log(response)
                //           // .then(data => {  
                            
                //                 //const metaSymbol =  data["Meta Data"]["2. Symbol"];
                //                 const lastRefreshed = dataJson["Meta Data"]['3. Last Refreshed'];
                //                 const ohlcData =  dataJson["Time Series (Daily)"][lastRefreshed];
                               
                //                 const opening =  ohlcData["1. open"];
                //                 const high =  ohlcData["2. high"];
                //                 const low =  ohlcData["3. low"];
                //                 const closing =  ohlcData["4. close"];
                                           
                //                 return new Promise((resolve, reject) => {
    
                //                       let sql =  `INSERT INTO ${table_name}  ( symbol, symbol_date, opening, high, low, closing) VALUES ("${symbol}","${lastRefreshed}", "${opening}" ,"${high}","${low}", "${closing}")`
                //                        dbCongig.query(sql, function(err, rows){
                //                       if(err){ 
    
                //                         console.log(err); 
                //                       }
                //                       else {

                //                         return resolve(data);
                                        
                //                       }
                //                   })
                //                   dbCongig.end()
                //               })
                //               .catch(err => {
                //                 console.log(err);
                                
                //               })
                                                                 
                   // })
                    
                      
                    // });//==end of second data

               }, 5000 * i);
             } // end of task

          } else {

            return { "message"  : "somthing went wrong on calling Stock models"};

          }

        
       
                        
      }//end of findStockList
    )//end of then
    .catch(err => {
      console.log(err);
      
    })
        
  };//end of call stock


    findStockList(){
    
    return this.query(`SELECT * FROM call_criteria_stock_tbl`);
           
     }
}

  module.exports = CallStock;              