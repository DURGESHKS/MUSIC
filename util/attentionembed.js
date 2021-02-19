const { Client, Collection, MessageEmbed } = require("discord.js");
const approveemoji = process.env.aemoji;
const denyemoji = process.env.demoji;
const { PREFIX } = require("./util/EvobotUtil");


module.exports = {
 async  attentionembed(message, titel) {

    try{
      await message.reactions.removeAll();
       await message.react(process.env.demoji);
      }catch{
        }

    let resultsEmbed = new MessageEmbed()
      .setTitle(":x: " + titel)
      .setColor(process.env.embcol)
      
      message.channel.send(resultsEmbed);
    return;

  }
};
