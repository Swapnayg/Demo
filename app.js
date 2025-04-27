// Requiring module
const express = require('express');
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
    console.log('QR RECEIVED');
    console.log(qr);
    console.log('QR Generated');
    qrcode.generate(qr, { small: true })
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    if (msg.body === '!ping') {
        msg.reply('pong');
    }
});

client.initialize();


// Creating express object
const app = express();

// Handling GET request
app.get('/', (req, res) => { 
    res.send('A simple Node App is '
        + 'running on this server') 
    res.end() 
}) 

// Port Number
const PORT = process.env.PORT ||3002;

// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
