process.on('uncaughtException', console.error)
require('./Launcher/connection.js')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, WAZimBotIncection, MessageType, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, fetchLatestBaileysVersion } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const crypto = require('crypto')
const chalk = require('chalk')
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const { fetchUrl, isUrl, processTime } = require("./Launcher/lib/myfunc")
const path = require('path')
const url = require('url')
const os = require('os')
const xa = require('xfarr-api')
const hx = require('hxz-api')
const maker = require('mumaker')
const fetch = require('node-fetch')
const { Readability } = require('@mozilla/readability');
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const Config = require('./Launcher/Config');
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');
const { PassThrough } = require('stream');
const { getLinkPreview, getPreviewFromContent } = require("link-preview-js");
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime,  sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./Launcher/lib/myfunc')
/*let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./Launcher/lib/lvlfunction")*/
const speedofbot = require("performance-now")
const { mediafireDl } = require('./Launcher/lib/mediafire.js')
const { lirikLagu } = require('./Launcher/lib/lirik.js')
const { fromBuffer } = require('file-type')
const mel = require('kitsune-api');
let { msgFilter } = require('./Library/Required/wiz.js')
const { Boom } = require("@hapi/boom")
const ffmpeg = require('fluent-ffmpeg')
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./Library/test.js')
const { addLevelingId, addLevelingLevel ,addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./Launcher/lib/level2')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./Library/limit')
//xp and leveling database⧈⧈⧈⧈
 
let thumbwiz = fs.readFileSync('./Library/wizard.jpg')
//message type
/* let drips = fs.readFileSync('./Library/Anjali.jpg')
*/

//database
const  dripsno = JSON.parse(fs.readFileSync('./Library/database/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./Library/database/leveluser.json'))
const _petualang = JSON.parse(fs.readFileSync('./Library/database/inventori.json'))
const balance = JSON.parse(fs.readFileSync('./Library/database/balance.json'))
const dripsanti = JSON.parse(fs.readFileSync('./Launcher/lib/rude.json'))
let bad = JSON.parse(fs.readFileSync('./Launcher/lib/rude.json'))
global.db = JSON.parse(fs.readFileSync('./Library/src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

module.exports = Anjali = async (Anjali, m, chatUpdate, store) => {
let thumb = thumbwiz
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°π÷¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°π÷¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await Anjali.decodeJid(Anjali.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const isPetualang = checkPetualangUser(sender)
//----GROUP METADATA----\\
const groupMetadata = m.isGroup ? await Anjali.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAntinsfw = m.isGroup ?  dripsno.includes(m.chat) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const antiToxic = m.isGroup ? dripsanti.includes(from) : false
const wizbotv1 = body.slice(0).trim().split(/ +/).shift().toLowerCase()
//-----END HERE------\\

//rest apis
global.APIs = { 
    bx: 'https://bx-hunter.herokuapp.com',
    dhnjing: 'https://dhnjing.xyz',
    hardianto: 'https://hardianto-chan.herokuapp.com',
    jonaz: 'https://jonaz-api-v2.herokuapp.com',
    neoxr: 'https://neoxr-api.herokuapp.com',
    nrtm: 'https://nurutomo.herokuapp.com',
    pencarikode: 'https://pencarikode.xyz',
    xteam: 'https://api.xteam.xyz',
    zahir: 'https://zahirr-web.herokuapp.com',
    zekais: 'http://zekais-api.herokuapp.com',
    zeks: 'https://api.zeks.xyz',
  }
  global.APIKeys = { 
    'https://bx-hunter.herokuapp.com': 'Ikyy69',
    'https://hardianto-chan.herokuapp.com': 'hardianto',
    'https://neoxr-api.herokuapp.com': 'yntkts',
    'https://pencarikode.xyz': 'pais',
    'https://api.xteam.xyz': 'apikeymu',
    'https://zahirr-web.herokuapp.com': 'zahirgans',
    'https://api.zeks.xyz': 'apivinz',
  }
  

const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}


const reply = (teks) => {
    Anjali.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: botname,mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, detectLinks: true,body: caption, thumbnail: thumbwiz,sourceUrl: ("github.com/Jackz-ser")}}})
}
const replay = (teks) => {
    Anjali.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: botname,mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, body: caption, thumbnail: thumbwiz,sourceUrl: ("github.com/Jackz-ser")}}})
}

const drip =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, //:'v
showAdAttribution: true,
title: botname,
body: caption,
mediaType: "VIDEO",
mediaUrl: `https://chat.whatsapp.com/GU2uwsrhCtZFmK8rpzfpta`,
description: ownername,
previewType: "PHOTO",
thumbnail: thumbwiz,
sourceUrl: "",
detectLinks: false,
    }}



let blessedtuna = {
    key : {
        fromMe: false,
participant : '0@s.whatsapp.net'
},
  message: {
  documentMessage: {
showAdAttribution: true,
  title: botname, 
  jpegThumbnail: thumbwiz
}
}
 }

 
 let mudratunha = {
    key: { 
         fromMe: false,
         participant: `0@s.whatsapp.net`, ...(m.chat ? 
    { remoteJid: "17608914335-1625305606@g.us" } : {}) 
               },
    message: { 
       "extendedTextMessage": {
                "text": caption,
                "title": botname,
                'jpegThumbnail': thumbwiz
             }
           } 
          }

let picaks = [flaming,fluming,flarun,flasmurf,mehk,awog,mohai,mhehe]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
    try {
 let isNumber = x => typeof x === 'number' && !isNaN(x)
 let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
 let user = global.db.users[m.sender]
 if (typeof user !== 'object') global.db.users[m.sender] = {}
 if (user) {
   if (!isNumber(user.afkTime)) user.afkTime = -1
   if (!('afkReason' in user)) user.afkReason = ''
   if (!isNumber(user.limit)) user.limit = limitUser
 } else global.db.users[m.sender] = {
   afkTime: -1,
   afkReason: '',
   limit: limitUser,
 }
 let chats = global.db.chats[m.chat]
   if (typeof chats !== 'object') global.db.chats[m.chat] = {}
   if (chats) {
  if (!('mute' in chats)) chats.mute = false
  if (!('chatbot' in chats)) chats.chatbot = false
  if (!('antilink' in chats)) chats.antilink = false
  if (!('antilinkyt' in chats)) chats.antilinkyt = false
  if (!('autoblock' in chats)) chats.autoblock = false
  if (!('isWelcome' in chats)) chats.isWelcome = true
  if (!('antilinkall' in chats)) chats.antilinkall = false
  if (!('antiytchannel' in chats)) chats.antiytchannel = false
  if (!('antitiktok' in chats)) chats.antitiktok = false
  if (!('antitelegram' in chats)) chats.antitelegram = false
  if (!('antiinstagram' in chats)) chats.antiinstagram = false
  if (!('antifb' in chats)) chats.antifb = false
  if (!('antibule' in chats)) chats.antibule = false
  if (!('antiwame' in chats)) chats.antiwame = false
  if (!('wame' in chats)) chats.wame = false
  if (!('antitwitter' in chats)) chats.antitwitter = false
  if (!('antivn' in chats)) chats.antivn = false
  if (!('antiphoto' in chats)) chats.antiphoto = false
  if (!('antisticker' in chats)) chats.antisticker = false
  if (!('antivideo' in chats)) chats.antivideo = false
} else global.db.chats[m.chat] = {
   mute: false,
   chatbot: false,
   wame: false,
   antilink: false,
   antilinkyt: false,
   isWelcome: true,
   antilinkall: false,
   antiytchannel: false,
   antitiktok: false,
   antitelegram: false,
   antiinstagram: false,
   antifb: false,
   antibule: false,
   antiwame: false,
   antitwitter: false,
   antisticker: false,
   antiphoto: false,
   antivn: false,
   antivideo: false,
 }
 let setting = global.db.settings[botNumber]
 if (typeof setting !== 'object') global.db.settings[botNumber] = {}
    if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = true
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateLocation' in setting)) setting.templateLocation = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = false
if (!('templateList' in setting)) setting.templateList = false
if (!('templateDoc' in setting)) setting.templateDoc = true
if (!('templateCatalog' in setting)) setting.templateCatalog = false   
if (!('chatbot' in setting)) setting.chatbot = false
if (!('templateZimbot' in setting)) setting.templateZimbot = false
if (!('grouponly' in setting)) setting.grouponly = false
if (!('autoblock' in setting)) setting.autoblock = false
    } else global.db.settings[botNumber] = {
status: 0,
autobio: true,
templateImage: false,
templateLocation: false,
templateGif: false,
templateMsg: false,
templateList: false,
templateDoc: true,
templateCatalog: false,
templateZimbot: false,
chatbot: false,
grouponly: false,
autoblock: false,
    }
} catch (err) {
 console.error(err)
}
Anjali.ws.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt (batteryLevelStr)
  battre = batterylevel
})  

Anjali.ws.on('CB:action,,charger', json => {
const chargerLevelStr = json[2][0][1].value
const charging = parseInt (chargerLevelStr)
  charger = charging
})  
//public/self
if (!Anjali.public) {
if (!m.key.fromMe) return
}

//push message to console && autoread

const Drips = require('drips-memes')
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
let d = new Date(new Date + 3600000)
let locale = 'id'
let time = d.toLocaleString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Asia/Kolkata'})
const { color } = require('./Launcher/lib/color')
if (isCmd && !m.isGroup)
console.log(color('[ RECIEVED ]'), color(time, 'red'), color(`${command} [${args.length}]`), Drips.hr(), 'FROM', color(pushname))

if (isCmd && m.isGroup)
console.log(color('[ RECIEVED ]'), color(time, 'red'), color(`${command} [${args.length}]`), Drips.hr(), 'FROM', color(pushname), 'in', color(groupName))

//leveling
const levelRole = getLevelingLevel(sender, _level)
  var role = 'bronz'
  if (levelRole <= 3) {
role = 'Copper'
  } else if (levelRole <= 5) {
role = 'Iron'
  } else if (levelRole <= 7) {
role = 'Silver'
  } else if (levelRole <= 10) {
role = 'Gold'
  } else if (levelRole <= 12) {
role = 'Platinum'
  } else if (levelRole <= 15) {
role = 'Mithril'
  } else if (levelRole <= 18) {
role = 'Orichalcum'
  } else if (levelRole <= 25) {
role = 'Adamantite'
  } else if (levelRole <= 45) {
role = 'Good In Game'
  }
 
var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
var petnya = ['😾','🐺','🦊','🐶','🐰']
var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']
//CHATBOT
if (global.dripsreadgroup) {
if (m.isGroup) { Anjali.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
if (global.dripsreadall) { if (m.message) { Anjali.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
if (global.dripsrecord) { if (m.chat) { Anjali.sendPresenceUpdate('recording', m.chat) }
}

if (global.dripstyping) { if (m.chat) { Anjali.sendPresenceUpdate('composing', m.chat) }
}
if (global.available) { if (m.chat) { Anjali.sendPresenceUpdate('available', m.chat) }
}
if (global.unavailable) { if (m.chat) { Anjali.sendPresenceUpdate('unavailable', m.chat) }
}
//RPG FUNCTION BY DRIPS
function randomNomor(min, max = null) {
  if (max !== null) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
  return Math.floor(Math.random() * min) + 1//removing credits is not any option
  }
  }

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
let beedrips = [f1,f2,f3,f4,f5,f6]
        let dripsee = pickRandom(beedrips)
/*
if (budy.includes("://chat.whatsapp.com/")) {
  console.log(
    color("[AUTO-JOIN]", "red"),
    color("YAHAHAHHAHAH", "white")
  );
  Anjali.query({
    json: [
      "action",
      "invite",
      `${budy.replace("https://chat.whatsapp.com/", "")}`,
    ],
  });
}
*/
if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
  console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
  return reply('〔ʙᴇ ᴘᴀᴛɪᴇɴᴛ 𝟻 sᴇᴄᴏɴᴅs/ᴄᴏᴍᴍᴀɴᴅ〕')}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
  }

var elit = '*Oʀᴅɴᴀʀʏ ᴀᴅᴠᴇɴᴛᴜʀᴇ*'
if (isPremium)
{
elit = '*Aᴅᴠᴇɴᴛᴜʀᴇ ᴘʀᴏ*'
}
if (isCreator)
{
elit = '*Aᴅᴍɪɴ ɢᴀᴍᴇ*'
}
async function sendButLoc(from) {
  reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
  var button = [
{ urlButton: { displayText: `SCRIPT`, url : `${wame}` } },
{ quickReplyButton: { displayText: `INVENTORI`, id: `${prefix}inventori` } },
{ quickReplyButton: { displayText: `OWNER`, id: `${prefix}owner` } }
]
bufu = await getBuffer(picak+'RPG GAMES')
var DADYDR = `
 ╔➽「 ◉ᴀʙᴏᴜᴛ◉ 」
  *Nᴀᴍᴇ:* ${pushname}
  *Rᴀɴᴋ:* ${role}
  *Sᴛᴀᴛᴜꜱ:* ${elit}
  *Mᴏɴᴇʏ:* $${(getBalance(sender, balance))}
  *Xᴘ:* ${getLevelingXp(sender)}/${reqXp}
  *Lᴇᴠᴇʟ:* ${getLevelingLevel(sender)}
 └───────────●

 ╔➽「 ◉ɪɴꜰᴏ◉ 」
  *Mᴏɴᴇʏ:* $${(getBalance(sender, balance))}
  *Gᴏʟᴅ:* ${getEmas(sender)}
  *Iʀᴏɴ:* ${getBesi(sender)}
  *Fɪꜱʜ:* ${getFish(sender)}
  *Dɪᴀᴍᴏɴᴅ:* ${getDm(sender)}
 └───────────●

 ╔➽「 ◉ᴍᴇɴᴜ ʀᴘɢ◉ 」
  ${prefix}joinrpg
  ${prefix}quest 
  ${prefix}mining
  ${prefix}mancing
  ${prefix}luckyday
  ${prefix}luckytime
  ${prefix}adventure
  ${prefix}inventori
 └───────────●

 ╔➽「 ◉Fᴀʀᴍ ʀᴘɢ◉ 」
  ${prefix}killslime
  ${prefix}killgoblin
  ${prefix}killdevil
  ${prefix}killbehemoth
  ${prefix}killdemon
  ${prefix}killdemonking 
 └───────────●

 ╔➽「 ◉Tʀᴀᴅᴇ ʀᴘɢ◉ 」
  ${prefix}sellikan
  ${prefix}sellbesi
  ${prefix}sellemas
  ${prefix}selldiamond
 └───────────●

 ╔➽「 ᴛʜᴀɴᴋs ᴛᴏ」
 ʏᴏᴜʀ ᴄʀᴇᴅɪᴛꜱ
 └───「 ${global.botname} 」
 `
let message = await prepareWAMessageMedia({ image: bufu, jpegThumbnail:bufu }, { upload: Anjali.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: DADYDR,
hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ${global.botname}`,
hydratedButtons:  [{        
    "urlButton": {
      "displayText": "GROUP",
      "url": youtube
    }
}, {
quickReplyButton: {
    displayText: 'INVENTORY',
    id: `${prefix}inventori`
}},{
  quickReplyButton: {
      displayText: 'OWNER',
      id: `${prefix}owner`
  }
}
]
}
}
}), { userJid: m.chat })
Anjali.relayMessage(m.chat, template.message, { messageId: template.key.id })
.catch ((err) => reply(err))
}
        async function sendButJoin(from, query) {
          reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
          _petualang.push(sender)
          fs.writeFileSync('./Library/database/inventori.json', JSON.stringify(_petualang))        
          addInventori(sender)
          addLevelingId(sender) 
          var name = args[0]
          var serialUser = createSerial(14)
          reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
          bufut = await getBuffer(picak+'JOIN RPG')
          var button = [
      { urlButton: { displayText: `Script`, url : `${wame}` } },
      { quickReplyButton: { displayText: `Rpg Menu`, id: `${prefix}rpgmenu` } },
      { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
      ]
          var hg = ` 
 ❲ *_Sᴜᴄᴄᴇꜱꜱ Jᴏɪɴ ʀᴘɢ_* ❳
 
╏ᴘʀᴏꜰɪʟᴇ ╏
 *Nᴀᴍᴇ :* ${name}
 *Lᴇᴠᴇʟ :* ${getLevelingLevel(sender)}
 *Sᴛᴀᴛᴜꜱ :* ${elit}
 *Xᴘ:*  ${getLevelingXp(sender)}/${reqXp}
❲ *_ʀᴘɢ ɢᴀᴍᴇ_* ❳`
  let message = await prepareWAMessageMedia({ image: bufut, jpegThumbnail:bufut }, { upload: Anjali.waUploadToServer })
  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
  templateMessage: {
  hydratedTemplate: {
  imageMessage: message.imageMessage,
  hydratedContentText: hg,
  hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ${global.botname}`,
  hydratedButtons:  [{        
      "urlButton": {
        "displayText": "GROUP",
        "url": youtube
      }
  }, {
  quickReplyButton: {
      displayText: 'INVENTORY',
      id: `${prefix}inventori`
  }},{
    quickReplyButton: {
        displayText: 'OWNER',
        id: `${prefix}owner`
    }
  }
  ]
  }
  }
  }), { userJid: m.chat })
  Anjali.relayMessage(m.chat, template.message, { messageId: template.key.id })
  .catch ((err) => reply(err))
  }
          
          async function sendButslime(from) {
            ez = Math.ceil(Math.random() * 400)
            addLevelingXp(sender, ez)
            a = randomNomor(55)
            b = randomNomor(400)
            c = randomNomor(80)
            d = randomNomor(3)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bufutI = await getBuffer(picak+'KILL SLIME')
          var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
          var hg = `*Mission to kill Slime*\n\n🎁 *Reward for killing Slime*\n  *Money:* $${b}\n  *Iron:* ${c}\n  *Gold:* ${a}\n  *Diamond:* ${d}\n\n*Thank you for carrying out this mission*`
          let message = await prepareWAMessageMedia({ image: bufutI, jpegThumbnail:bufutI }, { upload: Anjali.waUploadToServer })
          const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
          templateMessage: {
          hydratedTemplate: {
          imageMessage: message.imageMessage,
          hydratedContentText: hg,
          hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ${global.botname}`,
          hydratedButtons:  [{        
              "urlButton": {
                "displayText": "GROUP",
                "url": youtube
              }
          }, {
          quickReplyButton: {
              displayText: 'INVENTORY',
              id: `${prefix}inventori`
          }},{
            quickReplyButton: {
                displayText: 'OWNER',
                id: `${prefix}owner`
            }
          }
          ]
          }
          }
          }), { userJid: m.chat })
          Anjali.relayMessage(m.chat, template.message, { messageId: template.key.id })
          .catch ((err) => reply(err))
          }
          
            async function sendButgoblin(from) {
            ez = Math.ceil(Math.random() * 500)
            addLevelingXp(sender, ez)
            a = randomNomor(65)
            b = randomNomor(500)
            c = randomNomor(90)
            d = randomNomor(5)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bufo = await getBuffer(picak+'KILL GLOBIN')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission To kill Goblin*\n\n🎁 *Reward for killing Goblin*\n  *Money:* $${b}\n  *Iron:* ${c}\n  *Gold:* ${a}\n  *Diamond:* ${d}\n\n*Thank you for carrying out this misssion*`
            let message = await prepareWAMessageMedia({ image: bufo, jpegThumbnail:bufo }, { upload: Anjali.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: hg,
            hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ${global.botname}`,
            hydratedButtons:  [{        
                "urlButton": {
                  "displayText": "GROUP",
                  "url": youtube
                }
            }, {
            quickReplyButton: {
                displayText: 'INVENTORY',
                id: `${prefix}inventori`
            }},{
              quickReplyButton: {
                  displayText: 'OWNER',
                  id: `${prefix}owner`
              }
            }
            ]
            }
            }
            }), { userJid: m.chat })
            Anjali.relayMessage(m.chat, template.message, { messageId: template.key.id })
            .catch ((err) => reply(err))
            }
          
            async function sendButdevil(from) {
            ez = Math.ceil(Math.random() * 600)
            addLevelingXp(sender, ez)
            a = randomNomor(70)
            b = randomNomor(600)
            c = randomNomor(95)
            d = randomNomor(6)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bufas = await getBuffer(picak+'KILL DEVIL')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill 𝗗𝗲𝘃𝗶𝗹️*\n\n🎁 *Reward for killing Devil*\n  *Money:* $${b}\n  *Iron:* ${c}\n  *Gold:* ${a}\n  *Diamond:* ${d}\n\n*Thank you for carrying out this mission*`
            let message = await prepareWAMessageMedia({ image: bufas, jpegThumbnail:bufas }, { upload: Anjali.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: hg,
            hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ${global.botname}`,
            hydratedButtons:  [{        
                "urlButton": {
                  "displayText": "GROUP",
                  "url": youtube
                }
            }, {
            quickReplyButton: {
                displayText: 'INVENTORY',
                id: `${prefix}inventori`
            }},{
              quickReplyButton: {
                  displayText: 'OWNER',
                  id: `${prefix}owner`
              }
            }
            ]
            }
            }
            }), { userJid: m.chat })
            Anjali.relayMessage(m.chat, template.message, { messageId: template.key.id })
            .catch ((err) => reply(err))
            }
          
            async function sendButbehemoth(from) {
            ez = Math.ceil(Math.random() * 700)
            addLevelingXp(sender, ez)
            a = randomNomor(75)
            b = randomNomor(600)
            c = randomNomor(100)
            d = randomNomor(7)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            batai = await getBuffer(picak+'KILL BEHEMOTH')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill Behemoth*\n\n🎁 *Reward for kiling Behemoth*\n  *Money:* $${b}\n  *Iron:* ${c}\n  *Gold:* ${a}\n  *Diamond:* ${d}\n\n*Thank you for carrying out this mission*`
            let message = await prepareWAMessageMedia({ image: batai, jpegThumbnail: batai }, { upload: Anjali.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
              templateMessage: {
              hydratedTemplate: {
              imageMessage: message.imageMessage,
              hydratedContentText: hg,
              hydratedFooterText: `${global.botname}`,
              mentions: [sender],
              hydratedButtons: [{        
              "urlButton": {
              "displayText": "GROUP",
              "url": youtube
              }
            }, {
              quickReplyButton: {
                  displayText: 'INVENTORY',
                  id: `${prefix}inventori`
              }},{
                quickReplyButton: {
                    displayText: 'OWNER',
                    id: `${prefix}owner`
                }
              }
              ]
              }
              }
              }), { userJid: m.chat })
              Anjali.relayMessage(m.chat, template.message, { messageId: template.key.id })
                  
            .catch ((err) => reply(err))
          }
          
            async function sendButdemon(from) {
            ez = Math.ceil(Math.random() * 850)
            addLevelingXp(sender, ez)
            a = randomNomor(90)
            b = randomNomor(900)
            c = randomNomor(120)
            d = randomNomor(10)
            addLevelingXp(sender, ez)
            addBalance(sender, b, balance)
            addEmas(sender, a)
            addBesi(sender, c)
            addDm(sender, d)
            bhuu = await getBuffer(picak+'KILL DEMON')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill Demon*\n🎁 *Demon Kill Reward*\n  *Money:* $${b}\n  *Iron:* ${c}\n  *Gold*: ${a}\n  *Diamond:* ${d}\n\n*Thank You for Carrying Out This Mission*`
            let message = await prepareWAMessageMedia({ image: bhuu, jpegThumbnail: bhuu }, { upload: Anjali.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
              templateMessage: {
              hydratedTemplate: {
              imageMessage: message.imageMessage,
              hydratedContentText: hg,
              hydratedFooterText: `${global.botname}`,
              mentions: [sender],
              hydratedButtons: [{        
              "urlButton": {
              "displayText": "GROUP",
              "url": youtube
              }
            }, {
              quickReplyButton: {
                  displayText: 'INVENTORY',
                  id: `${prefix}inventori`
              }},{
                quickReplyButton: {
                    displayText: 'OWNER',
                    id: `${prefix}owner`
                }
              }
              ]
              }
              }
              }), { userJid: m.chat })
              Anjali.relayMessage(m.chat, template.message, { messageId: template.key.id })
                  
            .catch ((err) => reply(err))
          }
          
            async function sendButdemonking(from) {
            ez = Math.ceil(Math.random() * 1000)
            addLevelingXp(sender, ez)
            addLevelingXp(sender, ez)
            addBalance(sender, 1999, balance)
            addEmas(sender, 99)
            addBesi(sender, 99)
            addDm(sender, 99)
            bhuud = await getBuffer(picak+'KILL DEMONKING ')
            var button = [
                { urlButton: { displayText: `Script`, url : `${wame}` } },
                { quickReplyButton: { displayText: `Inventori`, id: `${prefix}inventori` } },
                { quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } }
                ]
            var hg = `*Mission to kill DemonKing*\n\n🎁 *DemonKing Kill Reward*\n  *Money* : $${b}\n  *Iron :* ${c}\n  *Gold :* ${a}\n  *Diamond :* ${d}\n\n*Thank You for Carrying Out This Mission*`
            let message = await prepareWAMessageMedia({ image: bhuud, jpegThumbnail:bhuud }, { upload: Anjali.waUploadToServer })
            const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: hg,
            hydratedFooterText: `ʀᴘɢ ɢᴀᴍᴇ ʙʏ ${global.botname}`,
            hydratedButtons:  [{        
                "urlButton": {
                  "displayText": "GROUP",
                  "url": youtube
                }
            }, {
            quickReplyButton: {
                displayText: 'INVENTORY',
                id: `${prefix}inventori`
            }},{
              quickReplyButton: {
                  displayText: 'OWNER',
                  id: `${prefix}owner`
              }
            }
            ]
            }
            }
            }), { userJid: m.chat })
            Anjali.relayMessage(m.chat, template.message, { messageId: template.key.id })
            .catch ((err) => reply(err))
            }
          const emote = (satu, dua) => {
            try{	    
            const { EmojiAPI } = require("emoji-api");
            const emoji = new EmojiAPI();
            emoji.get(satu)
            .then(emoji => {
            const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
            const buttonMessage = {image: {url: emoji.images[dua].url},caption: botname,footerText: 'Loading...',buttons: buttons,headerType: 4}
            Anjali.sendMessage(from, buttonMessage, {quoted:m})
            })
            } catch (e) {
            reply("Emoji error, please enter another emojinNOTE : Just enter 1 emoji")
            }
            }
//----ANTILINK AND CHATBOT-----\\
//chatbot is encrypted sorry
var _0x33fa3e=_0x465d;function _0x2a31(){var _0x124451=['reply','1109740LfSEyY','includes','9059424ATMYLh','702DCvREW','3129360vqgfpx','sender','@s.whatsapp.net','http://api.brainshop.ai/get?bid=167831&key=BFghpAKanUPXcLWQ&uid=','error','9eHTAtD','chatbot','catch','&msg=','1931044WXDcdy','data','split','18074ZBFvdT','user','GET','27825912kQipLx','62352dAoPvn','settings','http://api.brainshop.ai/get?bid=167831&key=BFghpAKanUPXcLWQ&uid=Anjali.user.id&msg='];_0x2a31=function(){return _0x124451;};return _0x2a31();}function _0x465d(_0x46eeb2,_0x5f0900){var _0x2a3178=_0x2a31();return _0x465d=function(_0x465d22,_0x141be9){_0x465d22=_0x465d22-0x110;var _0x9b342b=_0x2a3178[_0x465d22];return _0x9b342b;},_0x465d(_0x46eeb2,_0x5f0900);}(function(_0x3277b6,_0x4246a7){var _0x1e4f2f=_0x465d,_0x355551=_0x3277b6();while(!![]){try{var _0x22af3f=-parseInt(_0x1e4f2f(0x11c))/0x1+parseInt(_0x1e4f2f(0x115))/0x2+parseInt(_0x1e4f2f(0x111))/0x3*(parseInt(_0x1e4f2f(0x120))/0x4)+parseInt(_0x1e4f2f(0x124))/0x5+-parseInt(_0x1e4f2f(0x123))/0x6*(-parseInt(_0x1e4f2f(0x118))/0x7)+parseInt(_0x1e4f2f(0x122))/0x8+-parseInt(_0x1e4f2f(0x11b))/0x9;if(_0x22af3f===_0x4246a7)break;else _0x355551['push'](_0x355551['shift']());}catch(_0x32822d){_0x355551['push'](_0x355551['shift']());}}}(_0x2a31,0xabe65));if(db[_0x33fa3e(0x11d)][botNumber][_0x33fa3e(0x112)]){if(m[_0x33fa3e(0x125)][_0x33fa3e(0x121)](_0x33fa3e(0x126))){var mhata=''+command;sehcalaz=Anjali[_0x33fa3e(0x119)]['id'][_0x33fa3e(0x117)]('@')[0x0];var duzvi=encodeURI(mhata);const bhabhi={'method':_0x33fa3e(0x11a),'url':_0x33fa3e(0x11e)+command};await axios['get'](_0x33fa3e(0x127)+sehcalaz+_0x33fa3e(0x114)+duzvi)['then'](function(_0x55e8cd){var _0x4963f0=_0x33fa3e,_0x207a24='';_0x207a24=_0x55e8cd[_0x4963f0(0x116)]['cnt'],m[_0x4963f0(0x11f)](_0x207a24);})[_0x33fa3e(0x113)](function(_0x4cac14){var _0x12b308=_0x33fa3e;console[_0x12b308(0x110)](_0x4cac14);});}}


if (db.chats[m.chat].antilink) {
if (budy.includes('https://chat.whatsapp.com/')) {
if (!m.key.fromMe) {
reply('_Antilink detected kicking You_')
let sianj = m.sender
await Anjali.groupParticipantsUpdate(m.chat, [sianj], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
}
}
if (db.chats[m.chat].wame) {
if (budy.match(`wa.me/`)) {
reply('_Antilink detected kicking You_')
if (!isBotAdmins) return reply('Bot must be admin')
let gclink = (`https://wa.me/`)
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(`𝘖𝘏 𝘠𝘦𝘢𝘩 𝘪𝘵 𝘥𝘪𝘥𝘯𝘵 𝘩𝘢𝘱𝘱𝘦𝘯, 𝘣𝘦𝘤𝘢𝘶𝘴𝘦 𝘺𝘰𝘶 𝘴𝘦𝘯𝘵 𝘵𝘩𝘪𝘴 𝘸𝘢.𝘮𝘦 𝘭𝘪𝘯𝘬𝘺 𝘰𝘬𝘢𝘺😌`)
if (isAdmins) return reply(`𝘏𝘦𝘭𝘭 𝘯𝘰😱 𝘺𝘰𝘶 𝘢𝘥𝘮𝘪𝘯`)
if (isCreator) return reply(`𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶`)
Anjali.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (db.chats[m.chat].antiinstagram) {
    if (budy.includes("https://www.instagram.com/")){
 if (!isBotAdmins) return
 wizv1 = `*DETECTED*\n\n*you are admn okay*`
 if (isAdmins) return reply(wizv1)
 if (m.key.fromMe) return reply(wizv1)
 if (isCreator) return reply(wizv1)
 kice = m.sender
 await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove')
 Anjali.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no ig links here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
 }
}

if (db.chats[m.chat].antisticker) {
let isSticker = m.mtype
if(isSticker === "stickerMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send stickers here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI STICKER*\n\n*NO STICKERS  ALLOWED HERE OKAY GOODBYE*')
kice = m.sender
await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove')
Anjali.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no stickers here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antivn) {
let isAudio = m.mtype
if(isAudio === "audioMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send voice note here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI VOICE NOTE*\n\n*NO VOICE ALLOWED HERE  OKAY GOODBYE*')
kice = m.sender
await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove')
Anjali.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no voice note here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antivideo) {
let isVideo = m.mtype
if(isVideo === "videoMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send videos here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI VIDEO*\n\n*NO VIDEOS ALLOWED HERE  OKAY GOODBYE*')
kice = m.sender
await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove')
Anjali.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no videos here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antiphoto) {
let isPhoto = m.mtype
if(isPhoto === "imageMessage"){		  
if (!m.key.fromMe) {
if (isAdmins) return reply(`*you are admin lucky you dont send photos here*`)
if (isCreator) return reply(`*𝘖𝘰𝘰𝘰𝘩 𝘴𝘩𝘪𝘵😩 𝘴𝘰𝘳𝘳𝘺 𝘺𝘶 𝘢𝘳𝘦 𝘵𝘩𝘦 𝘰𝘸𝘯𝘦𝘳 𝘭𝘶𝘤𝘬𝘺 𝘺𝘰𝘶*`)
reply('*ANTI PHOTOS*\n\n*NO PHOTOS ALLOWED HERE  OKAY GOODBYE*')
kice = m.sender
await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove')
Anjali.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no photos here okay, now get out* `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
}

if (db.chats[m.chat].antifb) {
if(budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
wizv1 = `*DETECTED*\n\n*you are admin okay*`
if (isAdmins) return reply(wizv1)
if (m.key.fromMe) return reply(wizv1)
if (isCreator) return reply(wizv1)
kice = m.sender
await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove')
 Anjali.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no fb links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} 
 }

 if (db.chats[m.chat].antitelegram) {
 if (budy.includes("https://t.me/")){
 if (!isBotAdmins) return
 wizv1 = `*DETECTED*\n*you are admin okay*`
 if (isAdmins) return reply(wizv1)
 if (m.key.fromMe) return reply(wizv1)
 if (isCreator) return reply(wizv1)
 kice = m.sender
 await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove')
 Anjali.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no telegram links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} 
 }

if (db.chats[m.chat].antitiktok) {
if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
wizv1 = `*DETECTED*\n\n*you are bot admin okay*`
if (isAdmins) return m.reply(wizv1)
if (m.key.fromMe) return m.reply(wizv1)
if (isCreator) return m.reply(wizv1)
kice = m.sender
await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove')
Anjali.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no tiktok links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

if (db.chats[m.chat].antitwitter) {
if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
wizv1 = `*DETECTED*\n *you are bot admin okay*`
if (isAdmins) return reply(wizv1)
if (m.key.fromMe) return reply(wizv1)
if (isCreator) return reply(wizv1)
kice = m.sender
await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove')
Anjali.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no twittwer link here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

if (db.chats[m.chat].antilinkall) {
if (budy.includes("http")){ 
if (!isBotAdmins) return
wizv1 = `*DETECTED*\n *you are bot admin okay*`
if (isAdmins) return reply(wizv1)
if (m.key.fromMe) return reply(wizv1)
if (isCreator) return reply(wizv1)
kice = m.sender
await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove')
Anjali.sendMessage(m.chat, {text:`*DETECTED*\n@${kice.split("@")[0]} *I said dont send any links okay*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}


if (m.mtype == 'viewOnceMessage') {
if (!db.chats[m.chat].antionce) return
teks = `*DETECTED ONCE*

`
Anjali.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`*I opened it by force*`))
}



if (db.chats[m.chat].antilinkyt) {
if (budy.includes("https://youtube.com/")){ 
if (!isBotAdmins) return
wizv1 = `*DETECTED*\n*you are admin okay*`
if (isAdmins) return reply(wizv1)
if (m.key.fromMe) return reply(wizv1)
if (isCreator) return reply(wizv1)
kice = m.sender
await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove')
Anjali.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no yt links here okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} 
}

if (db.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
reply(`* ANTILINK *\n\n*You have been detected sending a group link, sorry you will be kicked!*`)
if (!isBotAdmins) return reply(`*bot must be admin okay*`)
let gclink = (`https://chat.whatsapp.com/`+await Anjali.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(`*sorry I didn't kick you, because you sent the link of this group lucky you*`)
if (isAdmins) return reply(`*Ehh sorry you admin*`)
if (isCreator) return reply(`*whoa you are  bot creator i wont kick you okay*`)
Anjali.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (budy.length > 3500) {
if (!m.isGroup) return
if (groupAdmins) return
reply('Mark as read\n'.repeat(300))
reply(`*DETECTED*\n\n*You sent a virtex, sorry you will be kicked from the group*`)
console.log(('[KICK]', 'red'), color('Received a text virus!', 'yellow'))
Anjali.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}  


if (db.chats[m.chat].antiwame) {
if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
wizv1 = `*DETECTED*\n\n*you are admin okay*`
if (isAdmins) return reply(wizv1)
if (m.key.fromMe) return reply(wizv1)
if (isCreator) return reply(wizv1)
kice = m.sender
await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove')
Anjali.sendMessage(from, {text:`*DETECTED*\n\n@${kice.split("@")[0]} *I said no links okay, now get out*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}

if (db.settings[botNumber].autoblock) {
if (m.chat.endsWith("@s.whatsapp.net")) {
if (isCreator) reply('*you are bot creator okay*')
block = m.sender
await Anjali.sendMessage(from, {text:`*AUTO BLOCK ENABLED*\n\n@${block.split("@")[0]} ${global.group1}\n\n${global.group2}`, m})
Anjali.updateBlockStatus(m.sender,'block')
}
}

if (db.chats[m.chat].antilinkyt) {
if (budy.includes(`https://nando.com`)) {
if (!isBotAdmins) return reply('*BOT MUST BE ADMIN OKAY*')
reply(`* ANTIYT *\n\n*SOrry ${botname} will kick you out because what you sent is a youtube link in this group*`)
if (isAdmins) return reply(`*Ehh sorry you admin*`)
 if (isCreator) return reply(`*whoa you are  bot creator i wont kick you okay*`)
kice = m.sender
await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
Anjali.sendMessage(m.chat, {text:`* ANTILINK *\n\n@${kice.split("@")[0]} *Has been kicked for sending the youtube link in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}


if (db.chats[m.chat].antibule)  {
if (m.sender.includes(`+212`)) {
if (!isBotAdmins) return reply('*BOT MUST BE ADMIN OKAY*')
reply(`* ANTIBULE *\n\n*Sorry ${botname} will kick you out because you are a stranger in this group*`)
if (isAdmins) return reply(`*Ehh sorry you admin*`)
if (isCreator) return reply(`*whoa you are  bot creator i wont kick you okay*`)
kice = m.sender
await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
Anjali.sendMessage(m.chat, {text:`* ANTILINK *\n\n@${kice.split("@")[0]} *You shouldn't be in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
}
}
if (db.settings[botNumber].grouponly) {
  if (!m.isGroup) {
    let a = 'a'
    if (!isCreator) throw `*INBOX NOT ALLOWED*`
    if (budy === a) 
    throw  '*inbox not allowed*'
   
    }
  }
var Apik = ''
var socket = fetchJson('wss://wss.allsportsapi.com/live_events?widgetKey='+ 'db7fca1f4dfd0fa8b50c30c3b4569a61e0c5c93a79c18864bf9c9b6ab635c427' +'&timezone=+02:00');
socket.onmessage = function(e) {
  if (e.data) {
    var matcheData = JSON.parse(e.data);
    console.log(`*JUST IN:*` + matcheData)
  }
}
//mute chat
 if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
 return
 }
//write database every 1minute
setInterval(() => {
 fs.writeFileSync('./Library/src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)
//But5Loc
var nextMinutes = Math.random() * 300 + 30;
setTimeout(function(){
  Anjali.sendMessage(Anjali.user.id, {text: `*Anjali MD ANNOUNCEMENT:* *GROUP TO OUR CHANNEL*\n\n*YOUTUBE:* NO CHANNEL\n\n*JOIN SUPPORTING GROUP https://chat.whatsapp.com/GU2uwsrhCtZFmK8rpzfpta*\n\n*NEW FEATURES COMING SOON SO STAY TUNED*\n\n*FEEL FREE TO BRING IDEAS OF THE FEATURES ON THE TABLE*`,contextInfo: { externalAdReply:{title:botname,body:caption,showAdAttribution: true,mediaType:2,thumbnail: thumbwiz ,mediaUrl:tutorial, sourceUrl: tutorial }}}, {quoted: m})
  //anouncement by drips 
}, nextMinutes * 300 * 1000);
const send5Butlmg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
    var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
   locationMessage: { degreesLatitude: 0, degreesLongtitude: 0, jpegThumbnail: img },
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
   }
   }
   }), options)
    return Anjali.relayMessage(jid, template.message, { messageId: template.key.id })
    }
//reset limit every 12hrs
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
 let user = Object.keys(global.db.users)
 let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
 for (let jid of user) global.db.users[jid].limit = limitUser
 console.log('Reseted Limit')
}, {
 scheduled: true,
 timezone: "Asia/Kolkata"
})
//script by drips   
//respond to cmd
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
 userJid: Anjali.user.id,
 quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Anjali.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
 ...chatUpdate,
 messages: [proto.WebMessageInfo.fromObject(messages)],
 type: 'append'
}
Anjali.ev.emit('messages.upsert', msg)
}
    
if (('family100'+m.chat in _family100) && isCmd) {
 kuis = true
 let room = _family100['family100'+m.chat]
 let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
 let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
 if (!isSurender) {
   let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
   if (room.terjawab[index]) return !0
   room.terjawab[index] = m.sender
 }
 let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
 let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
 Anjali.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
 if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebaklagu[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await Anjali.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'GUESS THE MUSIC' }, type: 1 }], ` Guess The Song\n\nCorrect Answer 🎉\n\nWant to play again? ${global.watermark}`, Anjali.user.name, m)
   delete tebaklagu[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = kuismath[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await reply(`Math Quiz\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
   delete kuismath[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebakgambar[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await Anjali.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], ` Guess The Picture\n\nCorrect answer 🎉\n\nWant to play again? ${global.watermark}`, Anjali.user.name, m)
   delete tebakgambar[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebakkata[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await Anjali.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'GUESS THE WORD' }, type: 1 }], `Guess The Word\n\nCorrect answer 🎉\n\nWant to play again? ${global.watermark}`, Anjali.user.name, m)
   delete tebakkata[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = caklontong[m.sender.split('@')[0]]
    deskripsi = caklontong_desk[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await Anjali.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'GUESS LONTONG' }, type: 1 }], `Guess Lontong\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? ${global.watermark}`, Anjali.user.name, m)
   delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebakkalimat[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await Anjali.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], ` Guess The Sentence \n\nCorrect answer 🎉\n\nWant to play again? ${global.watermark}`, Anjali.user.name, m)
   delete tebakkalimat[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebaklirik[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await Anjali.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], ` Guess The Lyrics \n\nCorrect answer 🎉\n\nWant to play again? ${global.watermark}`, Anjali.user.name, m)
   delete tebaklirik[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}
    
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebaktebakan[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await Anjali.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `Riddles \n\nCorrect answer 🎉\n\nWant to play again? ${global.watermark}`, Anjali.user.name, m)
   delete tebaktebakan[m.sender.split('@')[0]]
 } else reply('*WRONG ANSWER!*')
}

//tic-tac toe game
    this.game = this.game ? this.game : {}
    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
    if (room) {
    let ok
    let isWin = !1
    let isTie = !1
    let isSurrender = !1
    // reply(`[DEBUG]\n${parseInt(m.text)}`)
    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
    isSurrender = !/^[1-9]$/.test(m.text)
    if (m.sender !== room.game.currentTurn) { 
    if (!isSurrender) return !0
    }
    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
    reply({
    '-3': 'Game has ended',
    '-2': 'Invalid',
    '-1': 'Invalid Position',
    0: 'Invalid Position',
    }[ok])
    return !0
    }
    if (m.sender === room.game.winner) isWin = true
    else if (room.game.board === 511) isTie = true
    let arr = room.game.render().map(v => {
    return {
    X: '❌',
    O: '⭕',
    1: '1️⃣',
    2: '2️⃣',
    3: '3️⃣',
    4: '4️⃣',
    5: '5️⃣',
    6: '6️⃣',
    7: '7️⃣',
    8: '8️⃣',
    9: '9️⃣',
    }[v]
    })
    if (isSurrender) {
    room.game._currentTurn = m.sender === room.game.playerX
    isWin = true
    }
    let winner = isSurrender ? room.game.currentTurn : room.game.winner
    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
    if (room.x !== room.o) await Anjali.sendText(room.x, str, m, { mentions: parseMention(str) } )
    await Anjali.sendText(room.o, str, m, { mentions: parseMention(str) } )
    if (isTie || isWin) {
    delete this.game[room.id]
    }
    }

//suit vp
    this.suit = this.suit ? this.suit : {}
    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
    if (roof) {
    let win = ''
    let tie = false
    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
    Anjali.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
    delete this.suit[roof.id]
    return !0
    }
    roof.status = 'play'
    roof.asal = m.chat
    clearTimeout(roof.waktu)
    //delete roof[roof.id].waktu
    Anjali.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
    if (!roof.pilih) Anjali.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors`, m)
    if (!roof.pilih2) Anjali.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor️`, m)
    roof.waktu_milih = setTimeout(() => {
    if (!roof.pilih && !roof.pilih2) Anjali.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
    else if (!roof.pilih || !roof.pilih2) {
    win = !roof.pilih ? roof.p2 : roof.p
    Anjali.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
    }
    delete this.suit[roof.id]
    return !0
    }, roof.timeout)
    }
    let jwb = m.sender == roof.p
    let jwb2 = m.sender == roof.p2
    let g = /scissors/i
    let b = /rock/i
    let k = /paper/i
    let reg = /^(scissors|rock|paper)/i
    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
    roof.pilih = reg.exec(m.text.toLowerCase())[0]
    roof.text = m.text
    reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
    if (!roof.pilih2) Anjali.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
    }
    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
    roof.text2 = m.text
    reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
    if (!roof.pilih) Anjali.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
    }
    let stage = roof.pilih
    let stage2 = roof.pilih2
    if (roof.pilih && roof.pilih2) {
    clearTimeout(roof.waktu_milih)
    if (b.test(stage) && g.test(stage2)) win = roof.p
    else if (b.test(stage) && k.test(stage2)) win = roof.p2
    else if (g.test(stage) && k.test(stage2)) win = roof.p
    else if (g.test(stage) && b.test(stage2)) win = roof.p2
    else if (k.test(stage) && b.test(stage2)) win = roof.p
    else if (k.test(stage) && g.test(stage2)) win = roof.p2
    else if (stage == stage2) tie = true
    Anjali.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
    delete this.suit[roof.id]
    }
    }
    
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of mentionUser) {
 let user = global.db.users[jid]
 if (!user) continue
 let afkTime = user.afkTime
 if (!afkTime || afkTime < 0) continue
 let reason = user.afkReason || ''
 reply(`
Don't tag him!
He's in Offline/AFK, ${reason ? 'with reason ' + reason : 'no reason'}
Its been ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
 let user = global.db.users[m.sender]
 reply(`
You came back online from AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
 user.afkTime = -1
 user.afkReason = ''
}
    
switch(command) {
  case 'quest':
    let sectionnya= [
    {
    "title": `MISSION 1`,
     rows: [
    {
    "title": `KILLING SLIME`,
    "description": `Hunting Slimes For Rewards`,
    "rowId": `${prefix}slime`
    }
    ]
    }
    ,
    {
    "title": `MISSION 2`,
     rows: [
    {
    "title": `KILLING GOBLIN`,
    "description": `Hunt Globin To Get Rewards`,
    "rowId": `${prefix}goblin`
    }
    ]
    }
    ,
    {
    "title": `MISSION 3`,
     rows: [
    {
    "title": `KILLING DEVIL`,
    "description": `Hunt Devils To Get Rewards`,
    "rowId": `${prefix}devil`
    }
    ]
    }
    ,
    {
    "title": `MISSION 4`,
     rows: [
    {
    "title": `KILLING BEHEMOTH`,
    "description": `Hunting Behemoths To Earn Rewards`,
    "rowId": `${prefix}behemoth`
    }
    ]
    }
    ,
    {
    "title": `MISSION 5`,
     rows: [
    {
    "title": `KILLING DEMONS`,
    "description": `Hunt Demons To Get Rewards`,
    "rowId": `${prefix}demon`
    }
    ]
    }
    ,
    {
    "title": `MISSION 6`,
     rows: [
    {
    "title": `KILLING DEMONKING`,
    "description": `DemonKing Hunting To Earn Rewards`,
    "rowId": `${prefix}demonking`
    }
    ]
    }
    ]
    Anjali.sendList(m.chat, `Hi Chomie *${pushname}*`, `Please Select Below`, "CLICK", "ʀᴘɢ ɢᴀᴍᴇ ʙʏ ${global.botname} ", sectionnya, { quoted: m})
    break

case 'mf' : {         
        let q = m.quoted ? m.quoted : m
        if (/audio|video/.test(mime)) { 
		let media = await q.download()
   if (!text) throw 'Jid?' 
Anjali.sendMessage(text, {audio: media, mimetype: 'audio/mpeg', ptt: true, contextInfo: {externalAdReply : {title : `❝ᴊ ᴀ ᴄ ᴋ ᴢ  ᷤ  ⷷ  ᷢ⃝ ❠ ⫹⫺`, renderLargerThumbnail:false, showAdAttribution: true, body: `9:07●━━━━━━── 10:49⇆`, mediaUrl: `https://.instagram.com/safxr._`, mediaType: 2, thumbnail: fs.readFileSync('./Library/ajmal.jpg') }}}) 
    	} else throw 'Reply audio/video!'
       }
       break

//❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
//❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
case 'list': 
  let datane = fs.readFileSync('./Launcher/lib/random.js')
jsonData = JSON.parse(datane)
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
const { device_manufacturer } = require('os')
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
timestampe = speed();
latensie = speed() - timestampe
  let sections = []   
  let listmenu = [`shoes`,`normalwatches`,`bags`,`shirts`,`pants`,`airpods`,`smartwatches`,`vape`,`wiredearphones`,`neckbands`,`speakers`]
  let listmenuu = [`SHOES`,`NORMAL WATCHES`,`BAGS`,`SHIRTS`,`PANTS`,`AIRPODS`,`SMART WATCHES`,`VAPE`,`WIRED EARPHONES`,`NECKBANDS`,`SPEAKERS`]
  
  let nombor = 1
  let startnum = 0
  
  for (let x of listmenu) {
  const list = {title: 'MENU NUMBER ' + nombor++,                                                                             //by drips
  rows: [
  {
  title: `${listmenuu[startnum++]}`,
  
  rowId: `${prefix}${x}`
  }, 
  ]
  }
  sections.push(list)   
  }
  const sendm =  Anjali.sendMessage(
  m.chat, 
  {
  text: `
┍━━━━━━━━━━━━━━━━━━━━
│ ❐│ *ɴᴀᴍᴇ* : ${pushname}
│ ❐│ *ʟᴇᴠᴇʟ* : ${getLevelingLevel(sender)}
│ ❐│ *ʀᴏʟᴇ* : ${role}
│ ❐│ *ᴛɪᴍᴇ* : ${time}
│ ❐│ *ᴘʀᴇғɪx* : ${prefix}
│ ❐│ *ᴠᴇʀꜱɪᴏɴ:* 1.0
│ ❐│ *sᴇʀᴠᴇʀ* : Heroku
│ ❐│ *ғʀᴀᴍᴇᴡᴏʀᴋ* : Nodejs
│ ❐│ *ᴡᴇʙ ɪɴғᴏ* : Baileys
│ ❐│ *ᴛᴏᴛᴀʟ ᴜsᴇʀs:* ${Object.keys(global.db.users).length}
│ ❐│ *sᴛᴏʀᴀɢᴇ* : 467/500GB.
┕━━━━━━━━━━━━━━━━━━━━━
`,
  footer: watermark,
  title: `*LIST MENU*`,
  jpegThumbnail: buffer,
  buttonText: "CLICK HERE",
  sections
  }, { quoted : m })
break
case 'shoes': case 'shoesss':
  let datane = fs.readFileSync('./Launcher/lib/random.js')
jsonData = JSON.parse(datane)
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
const { device_manufacturer } = require('os')
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
timestampe = speed();
latensie = speed() - timestampe
  let section = []   
  let istmenu = [`nike`,`adidas`,`puma`,`nb`]
  let istmenuu = [`NIKE`,`ADIDAS`,`PUMA`,`NEW BALANCE`]
  
  let ombor = 1
  let tartnum = 0
  
  for (let x of istmenu) {
  const list = {title: 'MENU NUMBER ' + ombor++,                                                                             //by drips
  rows: [
  {
  title: `${istmenuu[tartnum++]}`,
  
  rowId: `${prefix}${x}`
  }, 
  ]
  }
  section.push(list)   
  }
  const sedm =  Anjali.sendMessage(
  m.chat, 
  {
  text: `

SELECT SHOE BRAND 😌🖖🏻

`,
  footer: watermark,
  title: `*LIST MENU*`,
  jpegThumbnail: buffer,
  buttonText: "CLICK HERE",
  section
  }, { quoted : m })
break
  case 'adidas':
let datane = fs.readFileSync('./Launcher/lib/random.js')
jsonData = JSON.parse(datane)
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
const { device_manufacturer } = require('os')
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
timestampe = speed();
latensie = speed() - timestampe
    let text = [
    {
    "title": `Menu 1`,
     rows: [
    {
    "title": `UNDER 500`,
    "description": `Hunting Slimes For Rewards`,
    "rowId": `${prefix}undfive`
    }
    ]
    }
    ,
    {
    "title": `Menu 2`,
     rows: [
    {
    "title": `UNDER 700`,
    "description": `Hunt Globin To Get Rewards`,
    "rowId": `${prefix}goblin`
    }
    ]
    }
    ,
    {
    "title": `Menu 3`,
     rows: [
    {
    "title": `UNDER 900`,
    "description": `Hunt Devils To Get Rewards`,
    "rowId": `${prefix}devil`
    }
    ]
    }
    ,
    {
    "title": `Menu 4`,
     rows: [
    {
    "title": `UNDER 1200`,
    "description": `Hunting Behemoths To Earn Rewards`,
    "rowId": `${prefix}behemoth`
    }
    ]
    }
    ,
    {
    "title": `Menu 5`,
     rows: [
    {
    "title": `UNDER 1500`,
    "description": `Hunt Demons To Get Rewards`,
    "rowId": `${prefix}demon`
    }
    ]
    }
    ,
    {
    "title": `Menu 6`,
     rows: [
    {
    "title": `UNDER 2000`,
    "description": `DemonKing Hunting To Earn Rewards`,
    "rowId": `${prefix}huu`
    }
    ]
    }
    ]
    Anjali.sendList(m.chat, `Hi Bro *${pushname}*`, `Please Select Below`, "CLICK", "What's your budget", text , { quoted: m})
    break
case 'nike':            
let datane = fs.readFileSync('./Launcher/lib/random.js')
jsonData = JSON.parse(datane)
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)
const { device_manufacturer } = require('os')
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
timestampe = speed();
latensie = speed() - timestampe
  let sect = []   
  let listmeu = [`undfive`,`undthou`,`undfivthou`]
  let listmeuu = [`UNDER 500`,`UNDER 1000`,`UNDER 1500`]
  
  let nombo = 1
  let startnu = 0
  
  for (let x of listmeu) {
  const list = {title: 'MENU NUMBER ' + nombo++,                                                                             //by drips
  rows: [
  {
  title: `${listmeuu[startnu++]}`,
  
  rowId: `${prefix}${x}`
  }, 
  ]
  }
  sect.push(list)   
  }
  const sendmnn =  Anjali.sendMessage(
  m.chat, 
  {
  text: `
SELECT YOUR BUDGET
`,
  footer: watermark,
  title: `*LIST MENU*`,
  jpegThumbnail: buffer,
  buttonText: "CLICK HERE",
  sect
  }, { quoted : m })
break
case 'undfive':
Anjali.sendMessage(m.chat, {text: '500 ALLA KUNNA OND'}, { quoted : m })
break


default:
   if (budy.startsWith('=>')) {
  if (!isCreator) return reply(global.owner)
  function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
  if (sat == undefined) {
 bang = util.format(sul)
  }
  return reply(bang)
  }
  try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
reply(String(e))
  }
   }

   if (budy.startsWith('>')) {
  if (!isCreator) return reply(global.owner)
  try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
  } catch (err) {
await reply(String(err))
  }
   }

   if (budy.startsWith('$')) {
  if (!isCreator) return reply(global.owner)
  exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
  })
   }

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
  this.anonymous = this.anonymous ? this.anonymous : {}
  let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
  if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
  contextInfo: {
 ...m.msg.contextInfo,
 forwardingScore: 0,
 isForwarded: true,
 participant: other
  }
} : {})
  }
  return !0
   }
   if (antiToxic)
   if (bad.includes(wizbotv1)) {
   if (m.text) {
   wizv1 = `*ANTIBAD WORDS*\n\n*Lucky you, you are admin*`
   if (isAdmins) return reply(wizv1)
   if (m.key.fromMe) return reply(wizv1)
   if (isCreator) return reply(wizv1)
   kice = m.sender
   await Anjali.groupParticipantsUpdate(m.chat, [kice], 'remove')
   Anjali.sendMessage(from, {text:`*ANTIBAD WORDS*\n\n@${kice.split("@")[0]} *was kicked because of being rude to others in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
   }
if (isCmd && budy.toLowerCase() != undefined) {
    if (m.chat.endsWith('broadcast')) return
    if (m.isBaileys) return
    let msgs = global.db.database
    if (!(budy.toLowerCase() in msgs)) return
    Anjali.copyNForward(m.chat, msgs[budy.toLowerCase()], )
}
}


    } catch (err) {
m.reply(util.format(err))
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
