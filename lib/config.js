const fs = require('fs')

global.owner = "923041278983" //owner number
global.footer = "MALiK-X" //footer section
global.status = false //"self/public" section of the bot
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['923041278983']
global.xprefix = '.'
global.gambar = "https://files.catbox.moe/aeu1g8.jpg"
global.OWNER_NAME = "@MALiKX481" //
global.DEVELOPER = ["6819461904"] //
global.BOT_NAME = "MALiK-X-MD"
global.bankowner = "MALiK-X"
global.creatorName = "MALiK-X"
global.ownernumber = '923041278983'  //creator number
global.location = "Pakistan, Panjab, bhwalpur"
global.prefa = ['','!','.','#','&']
//================DO NOT CHANGE OR YOU'LL GET AN ERROR=============\
global.footer = "MALiK-X" //footer section
global.link = "https://whatsapp.com/channel/0029VbBWarvEquiRThKxXY22"
global.autobio = true//auto update bio
global.botName = "MALiK-X-MD"
global.version = "1.0.1"
global.botname = "MALiK-X-MD"
global.author = "MALiK-X"
global.themeemoji = ''
global.wagc = 'https://chat.whatsapp.com/BBBDzHmxNHDBOjq6hznVv2?mode=wwt'
global.thumbnail = 'https://files.catbox.moe/aeu1g8.jpg'
global.richpp = ' '
global.packname = "Sticker By MALiK-X"
global.author = "\n\n\n\n\nCreate by MALiK-X\ntelegram : @MALiKX481"
global.creator = "923041278983@s.whatsapp.net"
global.ownername = 'MALiK-X' 
global.onlyowner = `𝘴𝘰𝘳𝘳𝘺 𝘰𝘯𝘭𝘺 𝘧𝘰𝘳  𝘰𝘸𝘯𝘦𝘳𝘴
𝘤𝘰𝘯𝘵𝘢𝘤𝘵 MALiK-X 𝘵𝘰 𝘣𝘦 𝘢𝘯 𝘰𝘸𝘯𝘦𝘳`
  // reply 
global.database = `𝘛𝘰 𝘣𝘦 𝘪𝘯  𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘣𝘢𝘴𝘦 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 MALiK-X*`
  global.mess = {
wait: "```WAIT FOR MALiK-X-MD```",
   success: "𝑺𝒖𝒄𝒄𝒆𝒔𝒔 𝒂𝒌𝒂𝒏𝒆",
   on: "MALiK-X active bro", 
   prem: "FOR PREMIUM USERS ONLY ADD YOUR NUMBER TO DATABASE TO ACCESS PREMIUM", 
   off: "MALiK-X off",
   query: {
       text: "Where's the text, man?",
       link: "Where's the link, bro?",
   },
   error: {
       fitur: "Sorry, bro, the feature has error. Please chat with the Bot Developer so it can be fixed immediately.",
   },
   only: {
       group: "Sorry bro, This Feature Can Only Be Used In Groups only",
private: "Sorry bro, This Feature Can Only Be Used In Private Chats",
       owner: "Sorry bro, This Feature Can Only Be Used by MALiK-X",
       admin: " Sorry, this feature can only be used by Bot Admins",
       badmin: "Sorry, bro, It Looks Like You Can't Use This Feature Because the Bot is Not yet Group Admin",
       premium: "This feature is specifically for MALiK-X beloved Premium users",
   }
}

global.hituet = 0
global.autoread = false;         // Auto-read messages
global.autoViewStatus = false;   // Auto-view WhatsApp statuses
global.autoReact = false;        // Auto-react with random emoji
global.autoTyping = false;       // Show "typing..." presence
global.autoRecording = false;    // Show "recording..." presence
global.autorecordtype = false;   // Random between typing/recording
global.antiCallEnd = false;   // Reject calls automatically
global.antiCallBlock = false; // Reject + block caller
global.antiDelete = false;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
