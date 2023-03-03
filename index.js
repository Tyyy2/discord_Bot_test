const { Client, GatewayIntentBits,ActivityType } = require('discord.js');
const {token}=require('./token.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//設定機器人事件
client.on('ready', () => {
    console.log(`成功登入 ${client.user.tag}!`);
    client.user.setStatus('online');
    client.user.setActivity('測試機器人功能',{type:ActivityType.Playing})
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
client.login(token);

