const { Client, Collection, MessageEmbed } = require(`discord.js`);


const approveemoji = process.env.aemoji;

const denyemoji = process.env.demoji;

const { PREFIX } = require("./util/EvobotUtil");

module.exports = {
  name: `ping`,
  description: `Gives you the ping of the Bot`,
  aliases: ["latency"],
  cooldown: 2,
  edesc: "Type this command to see how fast the Bot can response to your messages / commands inputs!",
  execute(message, args, client) {
    //react with approve emoji
    //send the Ping embed
    message.reply(new MessageEmbed().setColor(process.env.embcol).setTitle(":ping_pong: `" + client.ws.ping + "ms`"));
  }
}
