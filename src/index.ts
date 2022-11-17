import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';


dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Work with TS and Express :D')
})

app.listen(PORT, () => {
    console.log(`[server]... Server is running at port: ${PORT}`)
})