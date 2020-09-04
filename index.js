const BOT_TOKEN = '1035415533:AAHgwUaKnXA4lTYZxhjJ-FEsn8z7Z8mFmL0'

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