import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertServices } from './services/alertServices/AlertServices';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AgencyServices } from './services/agency/AgencyServices';
import { GoogleMapServices } from './services/googleMap/GoogleMapServices';
import { MetasServices } from './services/metas/MetasServices';
import { ReglasServices } from './services/reglas/ReglasServices';

// import { GooglePlus } from '@ionic-native/google-plus/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(
    {
      mode: 'ios',
    }
  ), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AgencyServices,
    AlertServices,
    GoogleMapServices,
    MetasServices,
    ReglasServices,
    NativeStorage,

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
