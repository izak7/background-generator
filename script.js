var database = [
	{
		username: "isaac",
		password: "supersecret"

	},
	{
		username: "Sally",
		password: "123"

	},
	{
		username: "ingrid",
		password: "777"

	}

];

var newFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"

	},
	{
		username: "Sally",
		timeline: "Javascript is sooooooooooooo coooooooooool!"
	}
];

var userNamePrompt = prompt("What is is your user name ?");
var passwordPrompt = prompt("What is your password ?");

function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password) {

		console.log(newFeed);

	}else {
		alert("Wrong user name and password!");
	}

}

signIn(userNamePrompt, passwordPrompt);