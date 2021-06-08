const { MessageButton } = require('discord-buttons');
module.exports = {
	name: 'button', //name
	description: 'Ping!', //description
	execute(message, args, client) { //uses message and args from index.js
        let button = new MessageButton()
        .setStyle('url')
        .setURL('https://npmjs.com/discord-buttons') 
        .setLabel('My First URL Button!') 
        .setDisabled(); 
      
      message.channel.send('Hey, i am powered by https://npmjs.com/discord-buttons', button);
	},
};

