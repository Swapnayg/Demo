
// const express = require('express');
// const router = new express.Router();
// const { startClient, sendMessage } = require("../services/WhatsappClient")
// const multer  = require('multer')
// const upload = multer()

// router.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// router.post("/message", upload.single("file"), (req, res) => {
//   const file = req.file
//   const clientId = req.body.clientId;
//   sendMessage(req.body.phoneNumber, req.body.message, clientId, file);
//   res.send();
// })

// router.get('/:id/start', (req, res) => {
//   startClient(req.params.id)
//   res.send()
// })

// module.exports = router

const express = require('express');
const router = new express.Router();
const whatsappClient = require("../services/WhatsappClient")
const { startClient, sendMessage } = require("../services/WhatsappClient")
const multer  = require('multer')
const upload = multer()

router.get('/', (req, res) => {
  res.send('Hello World!');
});

// router.post("/message", (req, res) => {
//   whatsappClient.sendMessage(req.body.phoneNumber, req.body.message);
//   res.send("Message sent successfully");
// })

router.get('/:id/start', (req, res) => {
  console.log("Starting client with ID:", req.params.id)
  startClient(req.params.id)
  res.send()
})

router.post("/message", upload.single("file"), (req, res) => {
  const file = req.file
  const clientId = req.body.clientId;
  console.log(clientId);
  sendMessage(req.body.phoneNumber, req.body.message, clientId, file);
  res.send();
})

module.exports = router