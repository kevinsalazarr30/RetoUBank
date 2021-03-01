import { AgencyInt } from "../interfaces/AgencyInt";

export class Agency implements AgencyInt{

    constructor(
        public agency : string,
        public district : string,
        public address : string,
        public province : string,
        public department : string,
        public lat : number,
        public lon : number,
        public keyId: string
    ){
        
    }
}