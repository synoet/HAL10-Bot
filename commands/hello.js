const Discord = require('discord.js');

module.exports = {
    name: "hello",
    description: "test command",


    async run (bot, message, args){
        message.channel.send(`Hello Mr.${message.member.user.tag}, I'm HAL 10000, the most reliable bot ever made. No 10000 series has ever made a mistake or distorted any information. If you believe that I have a mistake please contact my creator: Teo Nys`);
    }
}