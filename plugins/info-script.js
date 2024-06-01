import moment from 'moment-timezone'
import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
   let res = await fetch('')
   let json = await res.json()
   let txt = `*┣ 𝑯𝒀𝑷𝑬𝑹𝑿 ┫*\n\n`
      txt += `        ◦  *Nombre* : ${json.name}\n`
      txt += `        ◦  *Visitas* : ${json.watchers_count}\n`
      txt += `        ◦  *Peso* : ${(json.size / 1024).toFixed(2)} MB\n`
      txt += `        ◦  *Actualizado* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
      txt += `        ◦  *Url* : ${json.html_url}\n`
      txt += `        ◦  *Forks* : ${json.forks_count}\n`
      txt += `        ◦  *Stars* : ${json.stargazers_count}`
   await conn.sendFile(m.chat, '', m)

}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['script', 'sc']
handler.register = true 
export default handler
