


abstract class AbstractResponse{
    constructor(
        private status: number,
        private message: string,
        private data: any = null
    ){
    }
}


export class ResponseSuccess extends AbstractResponse{
    constructor(data: any = null){
        super(200, "OK", data);
    }
}


export class ResponseBadRequest extends AbstractResponse{
    constructor(message: string){
        const messageError: string = "FAIL" || message;

        super(500, messageError);
    }
}


