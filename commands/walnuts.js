const Discord = require('discord.js');
const {Quotes} = require('../assets/walnuts.json');
module.exports = {
    name: "walnuts",
    description: "this returns a secret message",

    async run (bot, message, args){
        message.channel.send(Quotes[Math.floor(Math.random() * Quotes.length)]);
    }
}