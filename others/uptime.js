const { Client, Collection, MessageEmbed } = require(`discord.js`);
const approveemoji = process.env.aemoji;
const denyemoji = process.env.demoji;
const PREFIX = process.env.mainprefix;

module.exports = {
  name: `uptime`,
  description: `Gives you the uptime of the Bot`,
  aliases: [],
  cooldown: 5,
  edesc: "With that you can see how long the Bot has been running nonstop",
  execute(message, args, client) {
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;
    //react with approve emoji
    message.react(process.env.aemoji);
    return message.channel.send(new MessageEmbed().setColor(process.env.embcol).setTitle(`***❃M✯U✯S✯I✯C❃ Uptime:***\n\n\`${days}d\` \`${hours}h\` \`${minutes}m\` \`${seconds}s\n\``));


  }
}