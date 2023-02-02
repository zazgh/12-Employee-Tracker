const mysql = require("mysql2");
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'employees_db'
    }
);


db.query("SELECT * FROM employees_db", (err,data) => {
if(err){
    throw err
} else {
    console,log(data);
}
})
