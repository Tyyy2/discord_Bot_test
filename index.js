const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//設定機器人事件
client.on('ready', () => {
    console.log(`成功登入 ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }

    if (interaction.commandName === 'abc') {
        await interaction.reply('def的拉!');
    }
});

//讓機器人登入
client.login('MTA4MTAyOTk1ODY5ODI3MDgzMA.GCn-GU.WyCC1kJ-d34k5Bycf3fXf6dWbc5DW-c4u2rfgo');

