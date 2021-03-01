import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertServices } from 'src/app/services/alertServices/AlertServices';
import { MetasInt } from 'src/app/data/interfaces/MetasInt';
import { MetasServices } from 'src/app/services/metas/MetasServices';

@Component({
  selector: 'app-form-save',
  templateUrl: './form-save.component.html',
  styleUrls: ['./form-save.component.scss'],
})
export class FormSaveComponent implements OnInit {

  public formG: FormGroup;
  public objMetas: MetasInt;
  @Input() metas: MetasInt;
  @Input() isSave: boolean;

  public tipoMetas: any;

  constructor(
    private formBuilder: FormBuilder,
    private alertServices: AlertServices,
    private metasServices: MetasServices

  ) {
    this.formValidator();
    this.tipoMetas = [
      { id: 0, des: 'Comprar algo' },
      { id: 1, des: 'Viajar' },
      { id: 2, des: 'Hacer algo' },
      { id: 3, des: 'Solo ahorrar' },
    ]
  };

  formValidator() {
    this.formG = this.formBuilder.group({
      tipoMeta: ['', Validators.required],
      fecha: ['', Validators.required],
      montoAhorrar: ['', Validators.required]
    });
  };

  ngOnInit() {
    if (this.isSave) {
      this.objMetas = {
        tipoMeta: 'Comprar algo',
        fecha: '01/03/2021',
        montoAhorrar: ''
      }
    } else {
      this.objMetas = this.metas;
      console.log(this.objMetas)
    }
  }

  save() {
    if (this.isSave) {
      this.metasServices.saveMeta(this.objMetas)
        .then(res => this.successSaveAgency())
        .catch(err => console.log(err));
    } else {
      this.metasServices.updateMeta(this.objMetas, this.objMetas.keyId)
        .then(res => this.successSaveAgency())
        .catch(err => console.log(err));
    }

  };

  successSaveAgency() {
    this.alertServices.createAlert('Confirmation !', 'Metas updated correctly..');
  };

}
