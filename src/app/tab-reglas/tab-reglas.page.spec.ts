import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabReglasPage } from './tab-reglas.page';

describe('TabReglasPage', () => {
  let component: TabReglasPage;
  let fixture: ComponentFixture<TabReglasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabReglasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabReglasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
