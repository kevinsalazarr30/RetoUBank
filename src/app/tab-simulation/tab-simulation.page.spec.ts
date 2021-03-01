import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabSimulationPage } from './tab-simulation.page';

describe('TabSimulationPage', () => {
  let component: TabSimulationPage;
  let fixture: ComponentFixture<TabSimulationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSimulationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabSimulationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
