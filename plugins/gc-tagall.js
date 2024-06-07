const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `📩 𝑪𝑶𝑴𝑼𝑵𝑰𝑪𝑨𝑫𝑶: ${pesan}\n✅ 𝑰𝑵𝑻𝑬𝑮𝑹𝑨𝑵𝑻𝑬𝑺: _*${participants.length}*_`;
  let teks = `┣ *𝑬𝑻𝑰𝑸𝑼𝑬𝑻𝑨 𝑮𝑬𝑵𝑬𝑹𝑨𝑳 𝑪𝑶𝑴𝑼𝑵𝑰𝑫𝑨𝑫 𝑭𝑰𝑭𝑻𝒀 𝑪𝑬𝑵𝑻𝑺* ┫\n\n ${oi}\n\n┏➤❗ 𝑹𝑬𝑽𝑰𝑽𝑨𝑵 𝑴𝑹𝑫 ❗\n`;
  for (const mem of participants) {
    teks += `┣🚻 @${mem.id.split('@')[0]}\n`;
  }
  teks += `┗➤ 𝑪𝒐𝒎𝒖𝒏𝒊𝒅𝒂𝒅 𝑭𝒊𝒇𝒕𝒚 𝑪𝒆𝒏𝒕𝒔`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
