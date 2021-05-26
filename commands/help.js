const Discord = require('discord.js');
module.exports = {
	name: 'help', //name
	description: 'Help is on the way', //description
    execute(message, args) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281') //embed line color
        .setTitle('Help') //embed top title
        .setDescription('This is a template bot. \nYou can add your own custom commands too! \nPlease feel free to edit anything here.')
        .setTimestamp() //shows time of embed sent
        .setFooter('Help') //bottom footer of embed

        message.channel.send(newEmbed); //sends the embed
    }
};