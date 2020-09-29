const Discord = require('discord.js');
const fs = require("fs"); 
const jimp = require('jimp');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("",{type: 'DND'})
  console.log('The Prince : MdAx77x')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('Created by: SPz / xR1.')
  console.log('with some help: .Manchez')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' HeRx Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Welcome to evil gates.`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} servers.`);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`); 
});


client.login(process.env.BOT_TOKEN);
