let handler = async m => m.reply(`
┌〔 Donasi • Pulsa 〕
├ Axis [0]
├ BYU [0]
└────

┌〔 Donasi • Emoney 〕
├ OVO, Dana [0]
├ https://saweria.co/inirey
└────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
