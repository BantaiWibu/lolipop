let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
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
  let res = `https://recoders-area.caliph.repl.co/api/loli?apikey=FreeApi`
  conn.sendFile(m.chat, res, 'loli.jpg', mess.sukses, m)
}
handler.help = ['loli'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(loli)$/i

module.exports = handler