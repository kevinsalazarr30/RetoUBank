import { Observable } from 'rxjs';
import { DocumentReference } from '@angular/fire/firestore';
import { Metas } from '../../entities/Metas';

export interface MetaRepository {
    getListMetas(): Observable<Array<Metas>>;
    saveMeta(meta: Metas): Promise<DocumentReference>;
}