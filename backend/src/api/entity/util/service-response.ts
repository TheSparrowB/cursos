export class ServiceResponse{

    constructor(
        public status: number,
        public result?: any,
        public message?: string
    ){

    }

}