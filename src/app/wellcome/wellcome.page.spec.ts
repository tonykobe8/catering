import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WellcomePage } from './wellcome.page';

describe('WellcomePage', () => {
  let component: WellcomePage;
  let fixture: ComponentFixture<WellcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellcomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WellcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
