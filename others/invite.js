const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add ❃M✯U✯S✯I✯C❃ to your server!")
      .setDescription("Love using ❃M✯U✯S✯I✯C❃? Great, Thank you! Consider adding it to your server")
      .setColor(process.env.embcol)
      .setAuthor('❃M✯U✯S✯I✯C❃','https://cdn.discordapp.com/attachments/778600026280558617/781024479623118878/ezgif.com-gif-maker_1.gif')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add ❃M✯U✯S✯I✯C❃ to your discord server`, 'https://discord.com/oauth2/authorize?client_id=809549806178402334&scope=bot&permissions=804781377', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};
