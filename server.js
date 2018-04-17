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
const fullInventory = 'SELECT product_name, department_name, price FROM bamazon_db.products';

//Welcome message
console.log('Welcome to Bamazon!');

//Show inventory
connection.query(fullInventory,function (err,res) {
	if (err) throw err;
	console.log(res);
});

//End of main execution
connection.end();
/*
var bidPost = [
	{
	type: 'list',
	name: 'bidOrPost',
	message: 'Would you like to bid on an item or post an item for sale?',
	choices: ['Bid','Post'],
	filter: function(val) {
		return val.toLowerCase();
	}
	}
];

inquirer.prompt(bidPost).then(function(answers) {
	console.log(answers.bidOrPost);
});
*/
