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
const id_list = 'SELECT item_id FROM bamazon_db.products';

//Welcome message
console.log('Welcome to Bamazon!');

//main execution
listInventory();


function listInventory() {
	connection.query(fullInventory,function (err,res,fields) {
		if (err) throw err;
		for (i in res) {
			console.log('Item#: '+res[i].item_id+'\n'+
						res[i].product_name+'\n'+
						'Price: $'+res[i].price);
			console.log('-----------------------');
		}
		inquireOrder();
	});
}

function inquireOrder() {
	connection.query(id_list, function (err,res) {
		//Pull list of item IDs
		if (err) throw err;
		var list = [];
		for (i in res) {
			list.push(String(res[i].item_id));
		}
		//Ask for item and quantity
		inquirer.prompt([
			{
				type: 'list',
				name: 'item',
				message: 'Which item would you like to order?',
				choices: list,
			},{
				type: 'input',
				name: 'quantity',
				message: 'How much of the item would you like to order?',
				default: 1
			}
		]).then(answers => {
			validateOrder(answers);
		}).catch( err => console.log(err));
	});
}

function validateOrder(answers) {
	connection.query('SELECT product_name, stock_quantity ,price FROM bamazon_db.products WHERE item_id=?', [answers.item],function (err,res) {
		var qty_req = answers.quantity	
		var qty_avail = res[0].stock_quantity;
		var unit_price = res[0].price;
		var product_name = res[0].product_name;
		if (qty_avail>=qty_req) {
			console.log('Executing order...');
			connection.query('UPDATE bamazon_db.products SET stock_quantity=? WHERE item_id=?', [qty_avail-qty_req,answers.item], function (err) {
				if (err) throw err;
				console.log('Your total: $'+unit_price*qty_req);
				connection.end();
			});
			
		} else {
			console.log('Insufficient quantity available!');
			connection.end();
		}
	});
}
