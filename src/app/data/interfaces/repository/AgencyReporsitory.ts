import { Observable } from 'rxjs';
import { DocumentReference } from '@angular/fire/firestore';
import { Agency } from '../../entities/Agency';
import { AgencyInt } from '../AgencyInt';

export interface AgencyRepository {
    getListAgencies(): Observable<Array<Agency>>;
    saveAgency(agency: Agency): Promise<DocumentReference>;
    updateAgency(agency: AgencyInt, id: string): Promise<void>;
}