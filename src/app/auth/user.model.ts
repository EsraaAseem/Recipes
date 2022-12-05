export class User{
    constructor(
        public email:string,
        public id:string,
        private _token:string,
        private _tokenExpressionData:Date
    ){}
    get token(){
        if(this._tokenExpressionData==null||new Date()>this._tokenExpressionData)
        {
            return null;
        }
        else{
            return this._token;
        }
    }

}