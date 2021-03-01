import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabDetailReglasPage } from './tab-detail-reglas.page';

describe('TabDetailReglasPage', () => {
  let component: TabDetailReglasPage;
  let fixture: ComponentFixture<TabDetailReglasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabDetailReglasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabDetailReglasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
