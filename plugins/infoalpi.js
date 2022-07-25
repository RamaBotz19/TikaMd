let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI Rama* ´ˎ˗
│ ✎ _Nama_ : Rama
│ ✎ _Sekolah_ : KULIAH
│ ✎ _Umur_ : 19
│ ✎ _Asal_ : mataram
│ ✎ _Status_ : ngentod
│ ✎ _WhatsApp_ :
│    wa.me/6287793236775
╰──────────────
`.trim(), m)
}

handler.help = ['infoalpi']
handler.tags = ['main', 'utama']
handler.command = /^(infoalpi)$/i

handler.exp = 150

module.exports = handler
