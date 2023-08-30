import express, {Express} from 'express'

import dotenv from 'dotenv'
dotenv.config()

const app:Express = express()
app.use(express.json())

import userRouter from 'users/user.controller'
app.use('/users', userRouter)

const PORT:number = Number(process.env.PORT)

app.listen(PORT, ()=>{
    console.log("running server on PORT:", PORT)
})