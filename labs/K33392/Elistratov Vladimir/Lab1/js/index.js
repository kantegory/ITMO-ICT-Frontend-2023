/*
function init (){

    console.log("GO")

    const Pool = require("pg").Pool;
    const dotenv = require("dotenv");
    dotenv.config();

    connectDb(Pool)
}
 
async function connectDb(Pool){
    console.log("GO2")
    const pool = new Pool({
        user: "postgres",
        password: "123456",
        host: "localhost",
        port: 5432,
        database: "FrontTestDB",
    });
    //console.log(pool)
    await pool.connect() //!!!!!!!!!!!!!!!!!! 

    const res = await pool.query('SELECT * FROM test')
    //console.log("______________________\n\n\n\n\n")
    console.log(res.rows)
    await pool.end()
}
 
init()

*/