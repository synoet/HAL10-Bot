const Discord = require('discord.js');
module.exports = { 
    name: "ping",
    description: "test command",

    async run (bot, message, args) {
        const ping = new Discord.MessageEmbed()
        .setDescription('Pong');

        message.channel.send(ping);
    }
}