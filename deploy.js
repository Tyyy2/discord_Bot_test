const { REST, Routes } = require('discord.js');

//註冊指令
const commands=[
    {
        name:'ping',
        description:'Replies with pong!'
    },
    {
        name:'abc',
        description:'def???'
    }
]
//設定機器人token
const rest = new REST({ version: '10' }).setToken('MTA4MTAyOTk1ODY5ODI3MDgzMA.GCn-GU.WyCC1kJ-d34k5Bycf3fXf6dWbc5DW-c4u2rfgo');

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