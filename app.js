import { token } from './keys';
const Discord = require('discord.js');
const client=new Discord.Client();

const keyword = '%';

client.on('ready', function(){
    console.log('Bot funcionando');
});

client.on('message', function(msg){
    if(msg.content === 'ping'){
        msg.reply('pong');
    }
});

client.login(token);