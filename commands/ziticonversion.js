const Discord = require('discord.js');

module.exports = {
    name: "ziticonversion",
    description: "names and shit",

    async run (bot, message, args){
        var ziti = args/1000
        message.channel.send(`That's ${ziti} boxes of ziti`);
    }
}