let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
「 Suport Bot Dengan Cara donasi 」

⫹⫺ Via Pulsa Indosat : 085863251704
⫹⫺ Via Dana : 081480448281
⫹⫺ Via Saweria :
⫹⫺ 9https://chat.whatsapp.com/IlskySeebRgJKKXnRGftd0

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
