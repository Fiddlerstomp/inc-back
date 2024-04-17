import express, {Request, Response} from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    const message = "Hello World!";
    res.send(message);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})