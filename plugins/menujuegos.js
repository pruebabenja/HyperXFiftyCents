import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen1;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `     ┣ *𝑴𝑬𝑵𝑼 𝑪𝑶𝑴𝑼𝑵𝑰𝑫𝑨𝑫 𝑭𝑰𝑭𝑻𝒀 𝑪𝑬𝑵𝑻𝑺* ┫
┏━━━━━━━━━━━┓
┣ *🧸❤️‍🩹𝑪𝒐𝒎𝒖𝒏𝒊𝒅𝒂𝒅 𝑭𝒊𝒇𝒕𝒚 𝑪𝒆𝒏𝒕𝒔 𝒕𝒆 𝒔𝒂𝒍𝒖𝒅𝒂* @${m.sender.split`@`[0]}
┣ 
┣ 🚀𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 𝑪𝒐𝒎𝒖𝒏𝒊𝒅𝒂𝒅 𝑭𝒊𝒇𝒕𝒚 𝑪𝒆𝒏𝒕𝒔 𝑱𝒖𝒆𝒈𝒐𝒔:
┣ ✅.𝒎𝒂𝒕𝒆𝒔
┣ ✅.𝒑𝒑𝒕𝒕
┣ ✅.𝒑𝒓𝒐𝒔𝒕𝒊𝒕𝒖𝒕𝒐
┣ ✅.𝒑𝒓𝒐𝒔𝒕𝒊𝒕𝒖𝒕𝒂
┣ ✅.𝒈𝒂𝒚2
┣ ✅.𝒍𝒆𝒔𝒃𝒊𝒂𝒏𝒂
┣ ✅.𝒑𝒂𝒋𝒆𝒓𝒐
┣ ✅.𝒑𝒂𝒋𝒆𝒓𝒂
┣ ✅.𝒑𝒖𝒕𝒐
┣ ✅.𝒑𝒖𝒕𝒂
┣ ✅.𝒎𝒂𝒏𝒄𝒐
┣ ✅.𝒎𝒂𝒏𝒄𝒂
┣ ✅.𝒓𝒂𝒕𝒂
┣ ✅.𝒏𝒆𝒈𝒓𝒐
┣ ✅.𝒏𝒆𝒈𝒓𝒂
┣ ✅.𝒇𝒆𝒂
┣ ✅.𝒇𝒆𝒐
┣ ✅.𝒔𝒊𝒏𝒑𝒐𝒕𝒐
┣ ✅.𝒔𝒊𝒏𝒕𝒆𝒕𝒂𝒔
┣ ✅.𝒔𝒊𝒏𝒑𝒊𝒕𝒐
┣ ✅.𝒂𝒅𝒐𝒑𝒕𝒂𝒅𝒐
┣ ✅.𝒂𝒅𝒐𝒑𝒕𝒂𝒅𝒂
┣ ✅.𝒍𝒐𝒗𝒆
┣ ✅.𝒍𝒐𝒔10
┣ ✅.𝒔𝒖𝒊𝒕𝒑𝒗𝒑
┣ ✅.𝒔𝒍𝒐𝒕
┣ ✅.𝒑𝒓𝒆𝒈𝒖𝒏𝒕𝒂
┣ ✅.𝒄𝒖𝒂𝒏𝒅𝒐
┣ ✅.𝒔𝒉𝒊𝒑5
┣ ✅.𝒂𝒃𝒓𝒂𝒛𝒐
┣ ✅.𝒔𝒉𝒊𝒑2
┣ ✅.𝒇𝒐𝒓𝒎𝒂𝒓𝒑𝒂𝒓𝒆𝒋𝒂
┣ ✅.𝒗𝒆𝒓𝒅𝒂𝒅
┣ ✅.𝒓𝒆𝒕𝒐
┣ ✅.𝒄𝒂𝒏𝒄𝒊𝒐𝒏
┣ ✅.𝒑𝒊𝒔𝒕𝒂
┣ ✅.𝒓𝒖𝒍𝒆𝒕𝒂
┣ ✅.𝒛𝒐𝒅𝒊𝒂𝒄
┣ ✅.𝒐𝒅𝒊𝒐
┣ ✅.𝒔𝒉𝒊𝒑
┣ ✅.𝒔𝒐𝒓𝒕𝒆𝒐
┣ ✅.𝒎𝒊𝒏𝒐𝒗𝒊𝒂
┣ ✅.𝒎𝒊𝒏𝒐𝒗𝒊𝒐
┣ ✅.𝒌𝒄𝒉𝒆𝒓𝒂
┣ ✅.𝒌𝒄𝒉𝒆𝒓𝒐
┗━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '🚀𝑬𝒍 𝒎𝒆𝒏𝒖 𝒕𝒊𝒆𝒏𝒆𝒏 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓, 𝒑𝒐𝒓𝒇𝒂𝒗𝒐𝒓 𝒖𝒔𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 .𝒐𝒘𝒏𝒆𝒓 𝒚 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒕𝒆 𝒄𝒐𝒏 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓\n\n.𝘳𝘦𝘱𝘰𝘳𝘵𝘦 <𝘵𝘦𝘹𝘵𝘰>', m);
  }
};
handler.command = /^(menujuegos|menújuegos|memujuegos)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
