import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprintSlipComponent } from './reprint-slip.component';

describe('ReprintSlipComponent', () => {
  let component: ReprintSlipComponent;
  let fixture: ComponentFixture<ReprintSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprintSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprintSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
