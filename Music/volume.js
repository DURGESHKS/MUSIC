////////////////////////////
//////CONFIG LOAD///////////
////////////////////////////
const { canModifyQueue } = require("../util/nkm");
const { Client, Collection, MessageEmbed } = require("discord.js");
const { attentionembed } = require("../util/attentionembed"); 
const approveemoji = process.env.aemoji;
const denyemoji = process.env.demoji;
const { PREFIX } = require("./util/EvobotUtil");
////////////////////////////
//////COMMAND BEGIN/////////
////////////////////////////
module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "Change volume",
  cooldown: 5,
  edesc: `Type the Command, to change the volume of the current song.\nUsage: ${PREFIX}volume <30-110>`,

execute(message, args) {
    //if not a guild return
    if(!message.guild) return;
    //react with approve emoji
    message.react(process.env.aemoji);
    //get the current queue
    const queue = message.client.queue.get(message.guild.id);
    //if no queue return error
    if (!queue) return attentionembed(message,`There is nothing playing`);
    //if not in the same voice channel as the Bot return 
    if (!canModifyQueue(message.member)) return;
    //define Info Embed
    const volinfoembed = new MessageEmbed()
    .setColor(process.env.embcol)
    .setTitle(`🔊 Volume is: \`${queue.volume}%\``)
    //if no args return info embed   			 
    if (!args[0]) return message.channel.send(volinfoembed).catch(console.error);
    //if args is not a number return error
    if (isNaN(args[0])) return attentionembed(message,"That's not a Number between **30 & 110**");
    //if args is not a Number between 150 and 0 return error
    if (parseInt(args[0]) < 30 || parseInt(args[0]) > 110)
      return attentionembed(message,"That's not a Number between **30 & 110**");
    //set queue volume to args
    queue.volume = args[0];
    //set current volume to the wanted volume
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);
    //define approve embed
    const volinfosetembed = new MessageEmbed()   
    .setColor(process.env.embcol)
    .setTitle(`🔊 Volume changed to: \`${args[0]}%\`!`)  
    //Send approve message
    return queue.textChannel.send(volinfosetembed).catch(console.error);
  }
};
