import mysql from 'mysql';

export default db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "1234",
    database : "bookshop" 
})

// export default db;