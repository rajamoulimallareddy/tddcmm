const { MessageEmbed } = require("discord.js");

const { MessageAttachment } = require("discord.js");
const canvacord = require("canvacord");

exports.run = (client, msg, args) => {
  const member =
    msg.mentions.users.first() ||
    msg.guild.members.cache.find(
      mem => mem.user.username.toLowerCase() === args.join(" ").toLowerCase()
    ) ||
    msg.guild.members.cache.get(args[0]);
  let user =
    msg.mentions.users.first() ||
    msg.guild.members.cache.find(
      mem => mem.user.username.toLowerCase() === args.join(" ").toLowerCase()
    ) ||
    msg.guild.members.cache.get(args[0]);
  if (!user) user = msg.author;
  const xpForLevel = level => Math.ceil(level * level * 100);
  const calcLevel = xp => Math.floor(0.1 * Math.sqrt(xp));
  const curLevel = calcLevel(
    client.profile.get(`${msg.guild.id}-${user.id}`, "levelpoints")
  ); // 2
  const pointsNeeded = xpForLevel(curLevel + 1);

  const card = new canvacord.Rank()
    .setUsername(member.username)
    .setDiscriminator(member.discriminator)
    .setRank(rank)
    .setLevel(level)
    .setCurrentXP(exp)
    .setRequiredXP(neededXP)
    .setStatus(user.presence.status)
    .setAvatar(user.displayAvatarURL({ format: "png", size: 1024 }));

  const img = card.build();

  return message.channel.send(new MessageAttachment(img, "rank. .setAuthor(member.tag, member.displayAvatarURL)
 )
  
    `Level: **` +ofile.get(`${msg.guild.id}-${user.id}`, "level") +
      "**" +
      "\n" +
      `XP: ${client.profile.get(
        `${msg.guild.id}-${user.id}`,
 ts"
      )}/${pointsNeeded} (${pont.profile.get(
        er.id}`,
          "levelpoints"
  

msg.channel.send(embed);
module.exports.help = {
  name: "level",
  usage: "!level"
};
