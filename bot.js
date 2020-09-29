const Discord = require('discord.js');
const fs = require("fs"); 
const jimp = require('jimp');
const client = new Discord.Client();

client.on('ready', () => {
   console.log(`ـــــــــــــــــــ`);
      console.log(`Welcome MdAx77x | Welcome To Evel Gates`);
        console.log(`ــــــــــــــــ`);
      console.log(`ON ${client.guilds.size} Server`);
console.log(`This Code Was Made By : Mdax77x`);   
console.log(`MdAx77x CopyRight `);
 console.log(`ــــــــــــــــ`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("dnd")
 
});


client.login(process.env.BOT_TOKEN);
