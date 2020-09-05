const BOT_TOKEN = '12345example'

const Telegraf = require('telegraf')

const bot = new Telegraf(BOT_TOKEN)

bot.start(ctx => ctx.reply('Hello, its echo bot!'))

bot.help(ctx => ctx.reply('Sent any message and I will copy it.'))

bot.on('message', (ctx => {
  ctx.telegram.sendCopy(ctx.chat.id, ctx.message)
}))

bot.launch()
  .then(res => {
  console.log('Started')
  })
  .catch(err => console.log(err)) 
