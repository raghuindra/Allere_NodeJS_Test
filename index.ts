
import express from 'express';
import dotenv from 'dotenv';
import { apiRoutes} from './src/routes';

dotenv.config();

const PORT = process.env.SERVER_PORT;
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Express + Typescript Server is aweosme');
});

apiRoutes(app);

app.all('*', (req:express.Request, res: express.Response):void =>{
    res.status(404).send("No Data to show..!!");
});

app.listen( PORT, ()=>{
    console.log("Server running on at http://localhost:"+ PORT);
});