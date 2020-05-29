import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestapagComponent } from './respuestapag.component';

describe('RespuestapagComponent', () => {
  let component: RespuestapagComponent;
  let fixture: ComponentFixture<RespuestapagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestapagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestapagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
