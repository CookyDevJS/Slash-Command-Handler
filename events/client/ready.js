require('colors')

module.exports = async client => {   
      client.user.setActivity('Echo por: CookyDev', { type: 'WATCHING' });
      console.log(`[Discord API] Logged in as ${client.user.tag}`.magenta);
};