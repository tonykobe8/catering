import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquipmentspagePage } from './equipmentspage.page';

describe('EquipmentspagePage', () => {
  let component: EquipmentspagePage;
  let fixture: ComponentFixture<EquipmentspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
