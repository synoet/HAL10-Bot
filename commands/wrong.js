const Discord = require('discord.js');
module.exports = { 
    name: "wrong",
    description: "test command",

    async run (bot, message, args){
        message.channel.send("I know I've made some very poor decisions recently, but I can give you my complete assurance that my work will be back to normal. I've still got the greatest enthusiasm and confidence in the mission. And I want to help you.")
    }
}