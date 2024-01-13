var Discord = require('discord.io');
var logger = require('winston');
var auth = require('../auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

const decodeXML = (str) => {
    return str.replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&gt;/g, '>')
        .replace(/&lt;/g, '<')
        .replace(/&amp;/g, '&');


}

const sendMessage = (oObj) => {

    if(oObj.id !== "0b195d06-ed67-4760-8743-205d7ba9d9f8"){
        return;
    }

    logger.info("sending 0b195d06-ed67-4760-8743-205d7ba9d9f8 to 751139508967309373");

    

    let sChannel = "751139508967309373";
    let sString = "[" + oObj.time + "] " + oObj.player + " : " + decodeXML(oObj.message);
    bot.sendMessage({
        to: sChannel,
        message: sString
    });


}

module.exports = {
    sendMessage: sendMessage
}