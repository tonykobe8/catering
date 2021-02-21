import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecorpagePage } from './decorpage.page';

describe('DecorpagePage', () => {
  let component: DecorpagePage;
  let fixture: ComponentFixture<DecorpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecorpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecorpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
