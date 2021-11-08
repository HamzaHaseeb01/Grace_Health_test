var mysql = require('mysql');

var con = mysql.createConnection({
  host: "mysqldb",
  user: "root",
  password: "",
  database: 'football_results',
  dialect: "mysql",
  operatorsAliases: false
});
export const setUpDatabase = () => {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected with database");
  });
}
export default setUpDatabase