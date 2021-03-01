import { Injectable } from "@angular/core";
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AgencyRepository } from "src/app/data/interfaces/repository/AgencyReporsitory";
import { Agency } from "src/app/data/entities/Agency";
import { AgencyInt } from "src/app/data/interfaces/AgencyInt";
import { MetaRepository } from "src/app/data/interfaces/repository/MetasRepository";
import { MetasInt } from "src/app/data/interfaces/MetasInt";
import { Meta } from "@angular/platform-browser";
import { Metas } from "src/app/data/entities/Metas";

@Injectable()

export class MetasServices implements MetaRepository {


    constructor(private angularFirestore: AngularFirestore) {

    };

    saveMeta(meta: Metas): Promise<DocumentReference> {
        return this.angularFirestore.collection("metas").add({ ...meta });
    };

    updateMeta(meta: MetasInt, id: string): Promise<void> {
        return this.angularFirestore
            .collection("metas")
            .doc(id)
            .set({ ...meta });
    };

    getListMetas(): Observable<Array<Metas>> {
        return this.angularFirestore
            .collection<Array<Metas>>('metas')
            .get()
            .pipe(
                map((_res: any) => {
                    return this.responseToListMetas(_res);
                })
            );
    };

    private responseToListMetas(_resListClients: any): Array<Metas> {

        const listMetas: Array<Metas> = new Array();
        _resListClients.forEach((item) => {
            const objMetas = new Metas(
                item.id,
                item.data().tipoMeta,
                item.data().fecha,
                item.data().montoAhorrar
            );
            listMetas.push(objMetas);
        });
        return listMetas;
    };


}

