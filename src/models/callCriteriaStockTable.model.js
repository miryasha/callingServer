const Base = require("./base.model");

class CallCriteriaStockTable extends Base {

    
    getAllCriterias(){                 
        
        return this.query(`SELECT * FROM call_criteria_stock_tbl`);
    }

    insert(args){                 
        
        return this.query(`INSERT INTO call_criteria_stock_tbl SET?`, [args]);
    }

    deleteById(call_criteria_stock_id){
        return this.query(`DELETE FROM  call_criteria_stock_tbl WHERE call_criteria_stock_id="${call_criteria_stock_id}" `);
    }

    update(call_criteria_stock_id, symbol,  database_name, table_name, host, port , user, password ){                 
        
        return this.query(`UPDATE call_criteria_stock_tbl SET  symbol ="${symbol}", database_name ="${database_name}", table_name ="${table_name}", host ="${host}" ,port ="${port}", user ="${user}"  , password ="${password}"  WHERE call_criteria_stock_id= "${call_criteria_stock_id}"`);
    }

    createTable(){
        return this.query(
            `CREATE TABLE IF NOT EXISTS call_criteria_stock_tbl
                (
                    call_criteria_stock_id int NOT NULL AUTO_INCREMENT,
                    symbol varchar(40) NOT NULL UNIQUE,
                    database_name varchar(255) NOT NULL,
                    table_name varchar(100) NOT NULL,
                    host varchar(255) NOT NULL,
                    port varchar(40) NOT NULL,
                    user varchar(100) NOT NULL,
                    password varchar(255) NOT NULL,  
                            
                    PRIMARY KEY (call_criteria_stock_id)
                );
            `
        )
    }
    
  }
  module.exports = CallCriteriaStockTable;