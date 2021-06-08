const { MessageButton } = require('discord-buttons');
module.exports = {
	name: 'button1', //name
	description: 'Ping!', //description
	execute(message, args, client) { //uses message and args from index.js
        let button = new MessageButton()
        .setStyle('url') // url type out of URL, GREEN, RED, and more
        .setURL('https://npmjs.com/discord-buttons') // url if u choose url
        .setLabel('My First URL Button!')  // name on button
        .setDisabled(); // delete if u want buttont to be clicked
      
      message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', button); //sends that
	},
};

