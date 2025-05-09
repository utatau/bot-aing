const { default: axios } = require('axios');
const dotenv = require('dotenv')
const express = require('express')
const qrcode = require('qrcode-terminal')
const { LocalAuth, Client } = require('whatsapp-web.js')


dotenv.config()

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const app = express()

app.listen(PORT, () => {
    console.log('aplikasi jalan di port: ', PORT)
})

app.get('/', (req, res) => {
    res.send('INI BOT WA GUA')
})
const bot = new Client({
    authStrategy: new LocalAuth({
        clientId: 'lol'
    }),
    puppeteer: {
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

bot.on('qr', (qr) => {
    qrcode.generate(qr, { small: true })
})
bot.on('authenticated', () => {
    console.log('di scan')
})
bot.on('ready', () => {
    console.log('bot ready')
})

const ollamaMenjawab = async pertanyaan => {
    try {
        const response = await axios.post(HOST, {
            model: 'deepseek-r1:1.5b',
            message: [
                {
                    role: "user", content: pertanyaan
                },
            ],
            stream: false
        })
        const content = response.data.message.content;
        return content;
    } catch (error) {
        console.log('error' + error)
        return error;
    }
}

bot.on('message', async message => {
    messageBody = message.body.trim().toLowerCase()
    if (messageBody.startwith('uta:')) {
        const pertanyaanUser = messageBody.substring(4)
        const jawaban = await ollamaMenjawab(pertanyaanUser)
        message.reply(jawaban)
    }
})

bot.initialize();