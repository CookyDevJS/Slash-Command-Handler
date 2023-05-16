const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { readdirSync } = require('fs');
const path = require('path');
const config = require("./config.json")
require('colors');
require('dotenv').config();

// setup slash commands

const commands = []
readdirSync("./slash/").map(async dir => {
	readdirSync(`./slash/${dir}/`).map(async (cmd) => {
	commands.push(require(path.join(__dirname, `./slash/${dir}/${cmd}`)))
    })
})
const rest = new REST({ version: "10" }).setToken(config.token);

(async () => {
	try {
		console.log('[Discord API] Started refreshing application (/) commands.'.yellow);
		await rest.put(
			// si quieres hacer tus comandos de barra en todos los servidores usa "applicationCommands("CLIENT_ID")"
			Routes.applicationGuildCommands(config.botID, config.serverID),
			{ body: commands },
		);
		console.log('[Discord API] Successfully reloaded application (/) commands.'.green);
	} catch (error) {
		console.error(error);
	}
})();