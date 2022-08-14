// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { guildID, token } = require("./config.json");

// Create a new client instance
const { InteractionType } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
//길드즈 = 서버

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("messageCreate", (msg) => {
  if (msg.content === "코련") {
    msg.reply("뭐 이 씹련아");
  }
});
// Login to Discord with your client's token
client.login(token);
