const { MessageEmbed } = require('discord.js')

exports.run = (client, msg, args) => {

  
  if (!args[0]) {
    let embed = new MessageEmbed()
    .addField('Misc 💫', '`help` `prefix` `support` `settings` `embed` `av` `invite`')
    .addField('Music 🎵', '`loop` `lyrics` `nowplaying` `pause` `play` `playlist` `pruning` `queue` `remove` `resume` `search` `shuffle` `skip` `skipto` `stop` `volume`')
    .addField('Level System 🚿', '`removelevelrole` `levelroles` `level`, `leaderboard` `set-levelchannel` `resetall` `addlevelrole` `set-xpgain` `set-noxprole` `set-levelmessage`, `setlevel`, `set-noxprole` `set-noxpchannel` `add-doublexprole` `disablelevelsystem`')
    .addField('Reaction Roles 🌈', '`addreactionrole` `removereactionrole` `reactionroles`')
    .addField('Moderation ⚔️', '`addrole` `purge` `imageonly` `anti-invite` `ban` `kick` `mute` `unmute` `softban`')
    .addField('Role System ®️', '`roles` `addpublicrole` `setrolechannel`')
    .addField('Welcome System 👋', '`welcome`')
    .addField('Application System 📩', '`application-setup` `application-deny` `application-accept` `applications`')
    .addField('User Channels 📢', '`userchannels-setup` `join` `uckick`')
    .setImage("https://cdn.discordapp.com/attachments/768524656747085896/777720602420445254/20201116_075308.gif")
    .setColor("#FFFFFF")
    .setFooter("To view extra information about a command, use !help <command>")
    msg.channel.send(embed)
    return;
  }

  if (!client.commands.get(args[0])) return msg.channel.send('I could not find a command with that name.')
  
  let array = client.commands.map(x => x)

 let data = array.findIndex(obj => obj.help.name == args[0])

  let embed = new MessageEmbed()
  .setTitle(`${args[0]}`)
  .setDescription(`Name: **${array[data].help.name}**\nUsage: **${array[data].help.usage}**`)
  .setColor("#FFFFFF")
  msg.channel.send(embed)



}

module.exports.help = {
    name:"help",
    aliases: [],
    usage: "!help || !help <command>",
    group: "misc"
}
