import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InqueriesPage } from './inqueries.page';

describe('InqueriesPage', () => {
  let component: InqueriesPage;
  let fixture: ComponentFixture<InqueriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InqueriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InqueriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
