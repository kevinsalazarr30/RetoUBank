import { ElementRef, Injectable } from "@angular/core";
import { AlertController } from '@ionic/angular';
import { AlertInt } from 'src/app/data/interfaces/native/AlertInt';
declare var google: any;
@Injectable()

export class GoogleMapServices {
    map: any;
    constructor() {

    }
    showMap(mapRef: ElementRef): void {
        const position = new google.maps.LatLng(-12.0964022, -77.0494868);
        const option = {
            center: position,
            zoom: 15,
            disableDefaultUI: true
        };
        this.map = new google.maps.Map(mapRef.nativeElement, option);
        const mapMarker = new google.maps.Marker({
            position: position,
            title: 'test',
            latitude: -12.0964022,
            longitude: -77.0494868
        });
        mapMarker.setMap(this.map);
    }
}