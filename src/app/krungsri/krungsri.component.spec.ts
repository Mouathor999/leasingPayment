import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KrungsriComponent } from './krungsri.component';

describe('KrungsriComponent', () => {
  let component: KrungsriComponent;
  let fixture: ComponentFixture<KrungsriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrungsriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KrungsriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
