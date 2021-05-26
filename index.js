const fs = require('fs'); //uses fs to look throught the commands folder when looking for command files
const Discord = require('discord.js'); //gets discord.js
const MessageEmbed = require('discord.js');
const { prefix, token } = require('./config.json'); //adds var prefix and token to the code looking via config.json

const client = new Discord.Client(); //creats the client
client.commands = new Discord.Collection();



const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}



client.once('ready', () => {
	console.log('Ready!'); //outputs Ready! once bot is online and working
});



client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);