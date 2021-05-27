module.exports = {
	name: 'ping', //name
	description: 'Ping!', //description
	execute(message, args) { //uses message and args from index.js
		message.channel.send('Pong!🏓') //sends pong!
		message.channel.send(new Date().getTime() - message.createdTimestamp + " ms🏓"); //sends bot delay!
	},
};
