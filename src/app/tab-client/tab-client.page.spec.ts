import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabClientPage } from './tab-client.page';

describe('TabClientPage', () => {
  let component: TabClientPage;
  let fixture: ComponentFixture<TabClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabClientPage],
      imports: [IonicModule.forRoot(), ]
    }).compileComponents();

    fixture = TestBed.createComponent(TabClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
