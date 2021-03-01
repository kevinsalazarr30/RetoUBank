import { Injectable } from "@angular/core";
import { AlertController } from '@ionic/angular';
import { AlertInt } from 'src/app/data/interfaces/native/AlertInt';

@Injectable()

export class AlertServices implements AlertInt {
    constructor(private alertController: AlertController) {

    }

    async createAlert(title: string, message: string) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: title,
            message: message,
            buttons: ['OK']
        });
        await alert.present();
    }
}