import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdbHomeComponent } from './jdb-home.component';

describe('JdbHomeComponent', () => {
  let component: JdbHomeComponent;
  let fixture: ComponentFixture<JdbHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdbHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
