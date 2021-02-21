import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodspagePage } from './foodspage.page';

describe('FoodspagePage', () => {
  let component: FoodspagePage;
  let fixture: ComponentFixture<FoodspagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodspagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
