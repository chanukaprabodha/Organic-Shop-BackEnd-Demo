// 1.Initialize express app
import express, {Express, Request, Response} from "express";

const app: Express = express();

// 2.Middleware to parse JSON bodies
app.use(express.json());

// 3.Define a simple HTTP GET request
app.get('/',(req:Request,
             res:Response) => {
    console.log(req.body);
    res.send('Hello World!');
});

export default app;