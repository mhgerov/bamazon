const PORT = process.env.PORT || 3000;

var inquirer = require('inquirer');

console.log('Welcome to Bamazon!');

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
