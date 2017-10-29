const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");


client.on('ready', () => {
    console.log('I am ready!');
    console.log(config.ownerID);
});

client.on('message', message => {
    console.log(message.author.if);

    if(message.author.id !== config.ownerID) return;

    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
