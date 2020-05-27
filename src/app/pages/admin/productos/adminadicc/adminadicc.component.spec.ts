import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminadiccComponent } from './adminadicc.component';

describe('AdminadiccComponent', () => {
  let component: AdminadiccComponent;
  let fixture: ComponentFixture<AdminadiccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminadiccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminadiccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
