let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Rama/ahmad
│ ✎ _Sekolah_ : KULIAH
│ ✎ _Umur_ : 19
│ ✎ _Asal_ : mataram
│ ✎ _Status_ : SEDANG NGENTOD
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/IcnbfEst6KK0UOaCJMh8E2
│ ✎ _Official Grup 2_ :
│    kosong
│ ✎ _Youtube _:
│    https://youtube.com/channel/UCJNi-zXIsky4nheONnxoY1w
│ ✎ _Instagram_ : 
│    https://instagram.com/ahmdzakaria47
│ ✎ _WhatsApp_ :
│    wa.me/6287793236775
╰───────────────────
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
