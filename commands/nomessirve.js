const Discord = require('discord.js');

module.exports = {
    name: 'nomessirve',
    description: 'nomessirve pibe',
    execute(msg, args) {
        const embed = new Discord.MessageEmbed();
        embed.setColor('#26FF82').setTitle(`NoMessirve`).setImage('https://cdn.discordapp.com/attachments/795478872597594164/818214534539640862/No_Messirve.jpg').setFooter("ChitoPanBOT#4390", 'https://cdn.discordapp.com/attachments/795478872597594164/831323098497810443/e5c50561d108aa8732bd3bcd30473892_1.png').setTimestamp();
        msg.channel.send(embed);
    }
};
