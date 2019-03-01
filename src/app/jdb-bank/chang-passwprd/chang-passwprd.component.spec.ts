import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangPasswprdComponent } from './chang-passwprd.component';

describe('ChangPasswprdComponent', () => {
  let component: ChangPasswprdComponent;
  let fixture: ComponentFixture<ChangPasswprdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangPasswprdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangPasswprdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
