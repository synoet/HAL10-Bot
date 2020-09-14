const Discord = require('discord.js');
module.exports = { 
    name: "error",
    description: "test command",

    async run (bot, message, args) {


        message.channel.send("Let me put it this way, Mr. Amor. The 9000 series is the most reliable computer ever made. No 9000 computer has ever made a mistake or distorted information. We are all, by any practical definition of the words, foolproof and incapable of error.");
    }
}