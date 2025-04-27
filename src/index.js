
// const express = require("express")
// const messageRouter = require('./routers/messageRouter')
// const whatsappclient = require('./services/WhatsappClient')

// const app = express()
// app.use(express.json())
// app.use(messageRouter)

// app.listen(process.env.PORT, () => console.log(`Server is ready in on port ${process.env.PORT}`))


const express = require("express")
const messageRouter = require('./routers/messageRouter')
const WhatsappCl = require('./services/WhatsappClient')

//WhatsappCl.initialize();

const app = express()
app.use(express.json())
app.use(messageRouter)
app.listen(3005, () => console.log(`Server is ready in on port ${3005}`))

