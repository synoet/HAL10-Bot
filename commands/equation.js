const Discord = require('discord.js');

module.export = {
    name: "equation",
    description: "convert latex to equation",
    
    async run (bot, message, args) {
        message.channel.send(args);
    }
}