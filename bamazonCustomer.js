//import modules 
require('dotenv').config();
var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host:		process.env.DB_HOST,
	user:		process.env.DB_USER,
	password:	process.env.DB_PASSWD,
	database:	process.env.DB
});
connection.connect();

//Commonly used queries
const fullInventory = 'SELECT item_id, product_name, price FROM bamazon_db.products';

//Welcome message
console.log('Welcome to Bamazon!');

//main execution
listInventory(orderPage);

//End of main execution
connection.end();

function listInventory(cb) {
	connection.query(fullInventory,function (err,res,fields) {
		if (err) throw err;
		for (i in res) {
			console.log('Item#: '+res[i].item_id+'\n'+
						res[i].product_name+'\n'+
						'Price: $'+res[i].price);
			console.log('-----------------------');
		}
		cb();
	});
}

//Should return a valid item# and quantiy
function orderPage() {
}
