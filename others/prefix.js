const { Client, Collection, MessageEmbed } = require(`discord.js`);
const approveemoji = process.env.aemoji;

const denyemoji = process.env.demoji;

const PREFIX = process.env.mainprefix;
const db = require('quick.db');


module.exports = {
  name: `prefix`,
  description: `Sets a server specific Prefix`,
  aliases: ["setprefix"],
  cooldown: 5,
  edesc: `Type this Command, to set a server specific Prefix! Usage: ${PREFIX}prefix <NEW PREFIX>`,
 async execute(message, args, client) {

    let prefix = await db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = PREFIX;

    //react with approve emoji
    message.react(process.env.aemoji);

    if(!args[0]) return message.channel.send(new MessageEmbed()
    .setColor(process.env.embcol)
    .setTitle(`Current Prefix: \`${prefix}\``)
    .setFooter('Please provide a new prefix')
    );
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(new MessageEmbed()
    .setColor(process.env.embcol)
    .setTitle(`❎ You don\'t have permission for this Command!`)
    );

    if(args[1]) return message.channel.send(new MessageEmbed()
    .setColor(process.env.embcol)
    .setTitle(`'❕The prefix can\'t have two spaces'`));

    db.set(`prefix_${message.guild.id}`, args[0])

    message.channel.send(new MessageEmbed()
    .setColor(process.env.embcol)
    .setTitle(`✅ Successfully set new prefix to **\`${args[0]}\`**`))
  }
}
