let axios = require("axios")
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => { 

  await conn.reply(m.chat, mess.wait, 0, { thumbnail: await(await fetch(ext.thum)).buffer(), contextInfo: {
                  externalAdReply: {
                    mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
                    title: ext.title,
                    body: ext.body,
                    thumbnail: await(await fetch(ext.thum)).buffer()
                   }
                 }
               }
           )
      axios.get(`https://api.xteam.xyz/shorturl/bitly?url=https://github.com/Bintang73&APIKEY=MIMINETBOT`)
    let hasil = `ShortLink Telah Selesai :\n\n${res.data.result}`
          
    conn.sendMessage(id, hasil ,MessageType.text)
    }
handler.help = ['bitly']
handler.tags = ['internet']
handler.command = /^(bitly)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
