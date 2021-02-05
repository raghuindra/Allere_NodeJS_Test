import * as express  from 'express';
import {ParserV2Controller} from '../../controllers/parse.v2.controller';
let parserV2 = new ParserV2Controller();

export class v2Routes{
    public router = express.Router();
    public static instance: v2Routes;
    constructor(){
        this.initializeRoutes();
    }

    public initializeRoutes(){
        this.router.post('/parse', parserV2.parse);
    }

    static getInstance(): v2Routes{
        if(v2Routes.instance === undefined){
            return new v2Routes();
        }else{
            return v2Routes.instance;
        }
    }


}