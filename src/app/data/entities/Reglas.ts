import { ReglasInt } from "../interfaces/Reglas";

export class Reglas implements ReglasInt {

    constructor(
        public keyId: string,
        public equipo: string,
        public equipoContrario: string,
        public evento: string,
        public fecha: string,
        public meta: string,
        public montoAhorrar: string,
        public eventoSuccess: number
    ) {
        this.eventoSuccess = Math.round(Math.random() * 5) + 1;
    }

}