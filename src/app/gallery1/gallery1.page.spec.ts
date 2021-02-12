import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Gallery1Page } from './gallery1.page';

describe('Gallery1Page', () => {
  let component: Gallery1Page;
  let fixture: ComponentFixture<Gallery1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Gallery1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
