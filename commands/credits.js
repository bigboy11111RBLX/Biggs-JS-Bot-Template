// Feel free to delete this file.
// It just gives me credit :-)
const { MessageButton } = require('discord-buttons');
const Discord = require('discord.js');
module.exports = {
    name: 'credits', //name
    description: 'Gives credit to the creator', //description
	execute(message, args, client) { //uses message and args from index.js
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281') //embed line color
        .setTitle('Credits') //embed top title
        .setDescription('This template was created by Bigboy_11111#0001 \nFeel free to use this for any Discord bot.')
        .setTimestamp() //shows time of embed sent
        .setFooter('Help') //bottom footer of embed



        let button2 = new MessageButton()
        .setStyle('url') // type of button
        .setURL('https://github.com/bigboy11111RBLX/Biggs-JS-Bot-Template') 
        .setLabel('GitHub Repo') 




        message.channel.send({ 
            component: button2,
            embed: newEmbed
        }); //sends the embed
    },
};
