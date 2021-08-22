let fs = require('fs')
global.owner = ['6283195138570'] // Letakan nomor kamu disini
global.mods = [] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  reyganz: 'https://restapifull-by-rey.herokuapp.com',
  reyganz2: 'https://server-api-rey.herokuapp.com',
  erzabot: 'https://erzaaa.herokuapp.com',
  reysekha: 'https://reysekha.herokuapp.com',
  rifqigay: 'https://whyme-api.herokuapp.com',
  bx: 'https://bx-hunter.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://restapifull-by-rey.herokuapp.com': 'administrator', //unlimited bang
  'https://server-api-rey.herokuapp.com': 'apirey', //unlimited tapi sering down awokawok
  'https://erzaaa.herokuapp.com': 'Erzaa', //unlimited tapi sering down awokawok
  'https://reysekha.herokuapp.com': 'flinskyApi', //unlimited bang
  'https://whyme-api.herokuapp.com': 'rargans', //invalid? Chat Owener
  'https://bx-hunter.herokuapp.com': 'Ikyy69', //invalid? Beli ya bang
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'BELI COKK',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'administrator',
}

// Sticker WM
global.packname = '❤️'
global.author = 'Rey Ganz'

global.wait = '_⏳sedang di proses_'

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
