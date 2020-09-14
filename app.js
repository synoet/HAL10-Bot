const Discord = require('discord.js');
const bot = new Discord.Client();
const {token} = require('./config.json');
const {readdirSync} = require('fs');
const {join} = require('path');

bot.commands = new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles){
    const command = require(join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}
bot.on("error", console.error);

const prefix = '!hal';

bot.on('ready', () => {
    console.log('I am ready');
})



bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length + 1).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!bot.commands.has(command)) return;

        try {
            bot.commands.get(command).run(bot, message, args);
        } catch (error){
            console.log(error);
        }
    }
})
bot.login(token);
