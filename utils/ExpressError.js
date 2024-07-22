class ExpressError extends Error{
    constructor(statusCode,message){
        super();
        this.statusCode = statusCode;
        this.messge = message;
    }
}
module.exports =ExpressError;