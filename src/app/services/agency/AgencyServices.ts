import { Injectable } from "@angular/core";
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AgencyRepository } from "src/app/data/interfaces/repository/AgencyReporsitory";
import { Agency } from "src/app/data/entities/Agency";
import { AgencyInt } from "src/app/data/interfaces/AgencyInt";

@Injectable()

export class AgencyServices implements AgencyRepository {


    constructor(private angularFirestore: AngularFirestore) {

    };

    saveAgency(agency: AgencyInt): Promise<DocumentReference> {
        return this.angularFirestore.collection("agency").add({ ...agency });
    };

    updateAgency(agency: AgencyInt, id: string): Promise<void> {
        return this.angularFirestore
            .collection("agency")
            .doc(id)
            .set({ ...agency });
    };

    getListAgencies(): Observable<Array<Agency>> {
        return this.angularFirestore
            .collection<Array<Agency>>('agency')
            .get()
            .pipe(
                map((_res: any) => {
                    return this.responseToListAgencies(_res);
                })
            );
    };

    private responseToListAgencies(_resListClients: any): Array<Agency> {

        const listAgencies: Array<Agency> = new Array();
        _resListClients.forEach((item) => {
            const objClient = new Agency(
                item.data().agency,
                item.data().district,
                item.data().address,
                item.data().province,
                item.data().department,
                item.data().lat,
                item.data().lon,
                item.id
            );
            listAgencies.push(objClient);
        });
        return listAgencies;
    };


}

