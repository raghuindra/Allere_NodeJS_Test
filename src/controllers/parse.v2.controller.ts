import * as express  from 'express';

export class ParserV2Controller{
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
                    'clientId':strArray[2].slice(0,3)+"-"+strArray[2].slice(3)
                }
            });
        }else{
            res.status(200).send({ message:"Empty Request Body.!!"});
        }
    }

     parseString = (data: string): string[] =>{
        let isPrevZero = false;
        let strArray = [];
        let str='';
        for(let char of data){

            if(char !== '0' ){
                str +=char; 
                isPrevZero = false;
            }else{
                if(isPrevZero == false){
                    strArray.push(str);
                    str = '';
                }
                isPrevZero = true;
            }
        }
        if(str !==''){strArray.push(str);}
        return strArray;
    }

}