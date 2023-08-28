import express, {Express, Request,Response} from 'express'

const app:Express = express()

app.get('/api',(req:Request, res:Response)=>{
    res.send('Hello TypeScript')
})
const port:number = 3000

app.listen(port, ()=>{
    console.log("running server")
})