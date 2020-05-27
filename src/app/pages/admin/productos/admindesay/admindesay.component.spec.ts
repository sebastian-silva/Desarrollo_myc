import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindesayComponent } from './admindesay.component';

describe('AdmindesayComponent', () => {
  let component: AdmindesayComponent;
  let fixture: ComponentFixture<AdmindesayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmindesayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindesayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
