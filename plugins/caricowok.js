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
	axios.get(`https://api.terhambar.com/nama?jenis=male`).then ((res) => {
	 	let hasil = `${res.data.result.nama}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['caricowok']
handler.tags = ['tools']
handler.command = /^(caricowok)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler