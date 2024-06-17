const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors({
    origin: [
        'http://localhost:3000', 
        'https://gebeya-p9r3-6zo2g4oa4-andargworkus-projects.vercel.app/',
        'https://gebeya-p9r3-6zo2g4oa4-andargworkus-projects.vercel.app',

        'https://gebeya-p9r3.vercel.app/',
        'https://gebeya-p9r3.vercel.app',
         d7ca933759eafb04d2b647da7946ee43c219c640
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
   
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api",router)

const PORT = 8888 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})






