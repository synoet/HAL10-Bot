const {Client, Collection} = require('discord.js');
const bot = new Client();

const {readdirSync} = require('fs');
const {join} = require('path');

bot.commands = new Discord.Collection();

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith("js"));

for (const file of commandFiles){
    const command = require(join(__dirname, "commands", `{file}`));
    bot.commands.set(command.name, command);
}

bot.on('error', console.error());

const prefix = '/HAL'
bot.on('ready', () => {
    console.log('I am ready');
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!clientInformation.commands.has(command)) return;

        try {
            clientInformation.commands.get(command).run(client, message, args);
        } catch (error){
            message.channel.send("Im sorry Dave I cannot do that.");
        }
    }
})
bot.login(token);
