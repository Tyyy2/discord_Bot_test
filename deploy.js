const { REST, Routes } = require('discord.js');
const {token}=require('./token.json');
//註冊指令
const commands = [
  {
    name: 'ping',
    description: 'ping三小'
  },
  {
    name: 'abc',
    description: 'def???'
  }
]
//設定機器人token
const rest = new REST({ version: '10' }).setToken(token);

//測試執行是否成功
(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands('1081029958698270830'), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})
();