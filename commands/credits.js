// Feel free to delete this file.
// It just gives me credit :-)
const Discord = require('discord.js');
module.exports = {
    name: 'credits', //name
    description: 'Gives credit to the creator', //description
    execute(message, args) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281') //embed line color
        .setTitle('Credits') //embed top title
        .setDescription('This template was created by Bigboy_11111#0001 \nFeel free to use this for any Discord bot. \n**GitHub Repo:** https://github.com/bigboy11111RBLX/Biggs-JS-Bot-Template')
        .setTimestamp() //shows time of embed sent
        .setFooter('Help') //bottom footer of embed

        message.channel.send(newEmbed); //sends the embed
    }
};
