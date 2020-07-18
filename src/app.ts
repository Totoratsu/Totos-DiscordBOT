import { token } from './keys';
import Discord from 'discord.js';

const client = new Discord.Client();

client.on('ready', function(){
    console.log('Bot Running');
});

client.on('message', function(msg){
    
});

client.login(token);