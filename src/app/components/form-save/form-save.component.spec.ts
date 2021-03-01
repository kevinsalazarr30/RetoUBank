import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormSaveComponent } from './form-save.component';

describe('FormSaveComponent', () => {
  let component: FormSaveComponent;
  let fixture: ComponentFixture<FormSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSaveComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
