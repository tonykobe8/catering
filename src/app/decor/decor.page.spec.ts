import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DecorPage } from './decor.page';

describe('DecorPage', () => {
  let component: DecorPage;
  let fixture: ComponentFixture<DecorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DecorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
