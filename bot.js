const Discord = require('discord.js');
const fs = require("fs"); 
const jimp = require('jimp');
var prefix = "$"
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("",{type: 'watching'})
  console.log('xR1')
  console.log('MdAx77x')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('S.P.z')
  console.log('ٍ :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Welcome Mdax`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     xR1Server' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`م رخصنا رفيق ولآ ظلمنآ عدو لآكن كلن بفعله يحدد مكانتة #☠️🔕`)
client.user.setStatus("offline")
 
});


client.login(process.env.BOT_TOKEN);
