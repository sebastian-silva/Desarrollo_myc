import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimpagComponent } from './primpag.component';

describe('PrimpagComponent', () => {
  let component: PrimpagComponent;
  let fixture: ComponentFixture<PrimpagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimpagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimpagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
