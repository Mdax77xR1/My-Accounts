const Discord = require('discord.js');
const fs = require("fs"); 
const jimp = require('jimp');
var prefix = "$"
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
client.user.setGame(`م رخصنا رفيق ولآ ظلمنآ عدو لآكن كلن بفعله يحدد مكانتة #☠️🔕`)
client.user.setStatus("offline")
 
});


client.on('message', message => {
    if(!message.channel.guild) return;
    if(message.content.startsWith('Mping')) { // حقوق مداكس
        if (message.author.bot) return;
        if(!message.channel.guild) return;
        var Bping =`${Math.round(client.ping)}` // Mdax77x CopyRight | Toxic Codes
                const E1ping = new Discord.RichEmbed()
        .setTitle('ــــــــــــــــــــــــــــــ')
        .addField(`**BOT Ping Is** :__${Bping}📶__`,"ــــــــــــــــــــــــــــــ")
        .setFooter(`Requested by | ${message.author.tag}`) // حقوق مداكس
        .setColor('RANDOM')
        message.channel.send(E1ping);
    }
});
client.on('message',message =>{
    if(!message.channel.guild) return;
if(message.content =='^members')
var E2Mdax = new Discord.RichEmbed()

setTitle('==========🌷| Members info==========')
.addField('** Members count👥.:**',`__** [ ${msg.guild.memberCount} ]**__`,true)
.addField('📗|online',` ${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
.addField('📓| offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
.setFooter(`Requested By | ${message.author.tag}`)
.addField('**==============**',true)
.setColor('RANDOM')
message.channel.send(E2Mdax);
}
});
client.login(process.env.BOT_TOKEN);
