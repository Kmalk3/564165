const Discord = require('discord.js'),
    client = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("509745217285652513");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`Welcome To Server **Magic**`), 4000)        
}
});
client.login(process.env.TOKEN);