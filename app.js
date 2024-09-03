import express from "express";
import router from './src/router/router.js'
import cors from 'cors'

const app = express()


app.use(cors())
app.use(express.json())
app.use(router)





app.listen(4000, ()=> {
    console.log('Server listening on port 4000')
})

