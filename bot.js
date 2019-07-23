const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("590858239596560394")
setInterval(function() {
channel.send(`Credit Spam , Frame , Credit By Kahrba , Farm Credit By Kahrba, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج [ " 248 " ]`);
}, 30)
})

client.login(process.env.BOT_TOKEN);