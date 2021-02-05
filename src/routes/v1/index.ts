import * as express  from 'express';
import {ParserV1Controller} from '../../controllers/parse.v1.controller';
let parserV1 = new ParserV1Controller();

export class v1Routes{
    public router = express.Router();
    public static instance: v1Routes;
    constructor(){
        this.initializeRoutes();
    }

    public initializeRoutes(){
        this.router.post('/parse', parserV1.parse);
    }

    static getInstance(): v1Routes{
        if(v1Routes.instance === undefined){
            return new v1Routes();
        }else{
            return v1Routes.instance;
        }
    }

}