import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertServices } from 'src/app/services/alertServices/AlertServices';
import { MetasInt } from 'src/app/data/interfaces/MetasInt';
import { MetasServices } from 'src/app/services/metas/MetasServices';
import { ReglasInt } from 'src/app/data/interfaces/Reglas';
import { ReglasServices } from 'src/app/services/reglas/ReglasServices';
import { Metas } from 'src/app/data/entities/Metas';

@Component({
  selector: 'app-form-save-reglas',
  templateUrl: './form-save-reglas.component.html',
  styleUrls: ['./form-save-reglas.component.scss'],
})
export class FormSaveReglasComponent implements OnInit {

  public formG: FormGroup;
  public objReglas: ReglasInt;
  @Input() reglas: ReglasInt;
  @Input() isSave: boolean;
  @Input() listMetas: Metas[];
  public tipoMetas: any;
  public eventos: any;
  public equipos: any;
  private countMetas: number;

  constructor(
    private formBuilder: FormBuilder,
    private alertServices: AlertServices,
    private reglasServices: ReglasServices
  ) {
    this.formValidator();
    this.equipos = [
      { id: 0, des: 'Real Madrid' },
      { id: 1, des: 'Sevilla' },
      { id: 2, des: 'Chelsea' },
      { id: 3, des: 'Porto' },
      { id: 3, des: 'Barcelona' },
      { id: 3, des: 'Club Brujas' },
      { id: 3, des: 'Juventus' },
      { id: 3, des: 'Liverpool' },
      { id: 3, des: 'Bayern' },
    ];
    this.tipoMetas = [
      { id: 0, des: 'Comprar algo' },
      { id: 1, des: 'Viajar' },
      { id: 2, des: 'Hacer algo' },
      { id: 3, des: 'Solo ahorrar' },
    ];
    this.eventos = [
      { id: 0, des: 'Jugar' },
      { id: 1, des: 'Ganar' },
      { id: 2, des: 'Goles' },
    ]
  };

  formValidator() {
    this.formG = this.formBuilder.group({
      equipo: ['', Validators.required],
      equipoContrario: ['', Validators.required],
      evento: ['', Validators.required],
      fecha: ['', Validators.required],
      meta: ['', Validators.required],
      montoAhorrar : ['', Validators.required]
    });
  };

  ngOnInit() {

    this.objReglas = {
      equipo: '',
      equipoContrario: '',
      evento: '',
      fecha: '',
      meta: '',
      eventoSuccess: 0,
      montoAhorrar: "0"
    }
    if (!this.isSave) {
      setTimeout(() => {
        this.objReglas = this.reglas;


      }, 1000);
    }
  }

  save() {
    if (this.isSave) {
      this.reglasServices.getListReglasByMeta(this.objReglas.meta)
        .subscribe(_res => {
          if (_res.length === 5) {
            this.alertServices.createAlert('Error !', 'Llego al maximo de reglas en esta meta');
            return;
          } else {
            this.reglasServices.saveReglas(this.objReglas)
              .then(res => this.successSaveAgency())
              .catch(err => console.log(err));
          };
        })

    } else {
      this.reglasServices.updateRegla(this.objReglas, this.objReglas.keyId)
        .then(res => this.successSaveAgency())
        .catch(err => console.log(err));
    }

  };



  successSaveAgency() {
    this.alertServices.createAlert('Confirmation !', 'Metas updated correctly..');
  };

}
