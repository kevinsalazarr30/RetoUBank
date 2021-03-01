import { Injectable } from "@angular/core";
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ReglasRepository } from "src/app/data/interfaces/repository/ReglasRepository";
import { Reglas } from "src/app/data/entities/Reglas";
import { ReglasInt } from "src/app/data/interfaces/Reglas";

@Injectable()

export class ReglasServices implements ReglasRepository {


    constructor(private angularFirestore: AngularFirestore) {

    };

    saveReglas(reglas: ReglasInt): Promise<DocumentReference> {
        return this.angularFirestore.collection("reglas").add({ ...reglas });
    };

    updateRegla(meta: ReglasInt, id: string): Promise<void> {
        return this.angularFirestore
            .collection("reglas")
            .doc(id)
            .set({ ...meta });
    };

    getListReglas(): Observable<Array<Reglas>> {
        return this.angularFirestore
            .collection<Array<Reglas>>('reglas')
            .get()
            .pipe(
                map((_res: any) => {
                    return this.responseToListReglas(_res);
                })
            );
    };

    getListReglasByMeta(meta: string): Observable<Array<Reglas>> {
        return this.angularFirestore
            .collection<Array<Reglas>>('reglas', ref => ref.where('meta', '==', meta))
            .get()
            .pipe(
                map((_res: any) => {
                    return this.responseToListReglas(_res);
                }),
            );
    };
    private responseToListReglas(_resListReglas: any): Array<Reglas> {

        const listReglas: Array<Reglas> = new Array();
        _resListReglas.forEach((item) => {
            const objReglas = new Reglas(
                item.id,
                item.data().equipo,
                item.data().equipoContrario,
                item.data().evento,
                item.data().fecha,
                item.data().meta,
                item.data().montoAhorrar,
                item.data().eventoSuccess
            );
            listReglas.push(objReglas);
        });
        return listReglas;
    };


}

