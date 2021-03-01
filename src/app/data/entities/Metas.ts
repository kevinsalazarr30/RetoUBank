import { MetasInt } from "../interfaces/MetasInt";

export class Metas implements MetasInt{

    constructor(
        public keyId?: string,
        public tipoMeta? : string,
        public fecha? : string,
        public montoAhorrar? : string
    ){
        
    }
}