const { Client, Collection, MessageEmbed } = require(`discord.js`);
const approveemoji = process.env.aemoji;

const denyemoji = process.env.demoji;

const { PREFIX } = require("./util/EvobotUtil");
module.exports = {
  name: `botlist`,
  description: `Gives you the botlists of the Bot`,
  aliases: [],
  cooldown: 3,
  edesc: "Type this command to view all Bot list Server where the bot is on. Please vote there UwU",
  execute(message, args, client) {
    //react with approve emoji
    message.react(process.env.aemoji);
    //send the botlist embed
    message.reply(new MessageEmbed().setColor(process.env.embcol)
    .setTitle("Here is a list for all Bots which ❃D✯U✯R✯G✯E✯S✯H❃ Created!")
   .addField("❃M✯U✯S✯I✯C❃", "https://discord.com/oauth2/authorize?client_id=809549806178402334&scope=bot&permissions=804781377")
    .addField("❃M✯U✯S✯I✯C✯2❃","https://discord.com/oauth2/authorize?client_id=809739280012410903&scope=bot&permissions=804781377")
    );

  }
}
