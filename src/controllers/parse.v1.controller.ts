import * as express  from 'express';

export class ParserV1Controller{
    constructor(){
    }
    
    parse = (req:express.Request, res:express.Response) => {
        if(req.body && ('data' in req.body)){
            let data = req.body.data;
            let strArray = this.parseString(data); 

            res.status(200).send({
                statusCode: 200,
                data:{
                    'firstName':strArray[0],
                    'lastName':strArray[1],
                    'clientId':strArray[2]
                }
            });
        }else{
            res.status(200).send({ message:"Empty Request Body.!!"});
        }
    }

    parseString = (data: string): string[] =>{
        let isPrevNonZero = true;
        let strArray = [];
        let str='';
        for(let char of data){

            if(char !== '0'){
                if(isPrevNonZero === false){
                    strArray.push(str);
                    str = ''+char;
                    isPrevNonZero = true;
                }else{
                    str +=char;
                }
                
            }else{
                str +=char;
                isPrevNonZero = false;
            }
            
        }
        if(str !==''){strArray.push(str);}
        return strArray;
    }

}