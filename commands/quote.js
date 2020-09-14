const {Quotes} = require('../assets/quotes.json');
const Discord = require('discord.js');

module.exports = {
    name: "quote",
    description: "names some quotes",

    async run (bot, message, args) {
        message.channel.send(Quotes[Math.floor(Math.random() * Quotes.length)], {tts: true});
    }
}