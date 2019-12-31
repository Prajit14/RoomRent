import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddPropertiesPage } from './add-properties.page';

describe('AddPropertiesPage', () => {
  let component: AddPropertiesPage;
  let fixture: ComponentFixture<AddPropertiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPropertiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddPropertiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
