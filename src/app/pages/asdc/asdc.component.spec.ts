import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsdcComponent } from './asdc.component';

describe('AsdcComponent', () => {
  let component: AsdcComponent;
  let fixture: ComponentFixture<AsdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
