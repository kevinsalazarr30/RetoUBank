import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormSaveComponent } from './form-save/form-save.component';
import { FormSaveReglasComponent } from './form-save-reglas/form-save-reglas.component';

import { ListCardComponent } from './list-card/list-card.component';
import { OnlynumberDirective } from "../only-number.directive";
FormSaveReglasComponent
@NgModule({
    imports: [
        IonicModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    ],
    declarations: [
        FormSaveComponent,
        ListCardComponent,
        FormSaveReglasComponent,
        OnlynumberDirective
    ],
    exports: [
        FormSaveComponent,
        ListCardComponent,
        FormSaveReglasComponent
    ],
    providers: []
})


export class ComponentsModule {
}
