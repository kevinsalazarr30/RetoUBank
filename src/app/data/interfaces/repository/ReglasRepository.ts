import { Observable } from 'rxjs';
import { DocumentReference } from '@angular/fire/firestore';
import { Reglas } from '../../entities/Reglas';
import { ReglasInt } from '../Reglas';

export interface ReglasRepository {
    getListReglas(): Observable<Array<Reglas>>;
    saveReglas(reglas: ReglasInt): Promise<DocumentReference>;
}