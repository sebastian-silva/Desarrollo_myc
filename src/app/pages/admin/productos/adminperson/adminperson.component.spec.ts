import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpersonComponent } from './adminperson.component';

describe('AdminpersonComponent', () => {
  let component: AdminpersonComponent;
  let fixture: ComponentFixture<AdminpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
