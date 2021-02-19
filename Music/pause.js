const { canModifyQueue } = require("../util/nkm");
const { Client, Collection, MessageEmbed } = require("discord.js");

const { attentionembed } = require("../util/attentionembed"); 
const approveemoji = process.env.aemoji;
const denyemoji = process.env.demoji;
const { PREFIX } = require("./util/EvobotUtil");
module.exports = {
  name: "pause",
  aliases: ["pa"],
  description: "Pause the currently playing music",
  cooldown: 5,
  edesc: `Type this command to pause the Song!\nUsage: ${PREFIX}pause`,
  execute(message) {
    //If not in a guild return
    if(!message.guild) return;
    //get the queue
    const queue = message.client.queue.get(message.guild.id);
    //if no queue return error
    if (!queue) return attentionembed(message, "There is nothing playing").catch(console.error);
    //If not in the same channel return
    if (!canModifyQueue(message.member)) return;
    //If its playing
    if (queue.playing) {
      //set playing to false
      queue.playing = false;
      //pause the music
      queue.connection.dispatcher.pause(true);
      //define the pause embed
      const pausemebed = new MessageEmbed().setColor(process.env.embcol)
      .setAuthor(`${message.author.username} paused the music.`, "https://media.giphy.com/media/kiho1zyvAmGiKBjIAs/giphy.gif")
      //react with approve emoji
      message.react(process.env.aemoji)
      //return message
      return queue.textChannel.send(pausemebed).catch(console.error);
    }
  }
};
