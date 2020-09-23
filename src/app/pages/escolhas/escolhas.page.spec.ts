import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscolhasPage } from './escolhas.page';

describe('EscolhasPage', () => {
  let component: EscolhasPage;
  let fixture: ComponentFixture<EscolhasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolhasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscolhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
