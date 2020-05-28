import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbandopagoComponent } from './probandopago.component';

describe('ProbandopagoComponent', () => {
  let component: ProbandopagoComponent;
  let fixture: ComponentFixture<ProbandopagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbandopagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbandopagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
