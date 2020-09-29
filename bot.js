const Discord = require('discord.js');
const fs = require("fs"); 
const jimp = require('jimp');
const client = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Welcome Mdax`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     xR1Server' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Falconse Roleplay | https://discord.gg/Rsgyruy`)
client.user.setStatus("dnd")
 
});



client.login(process.env.BOT_TOKEN);
