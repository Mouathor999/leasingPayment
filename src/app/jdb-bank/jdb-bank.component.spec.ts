import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdbBankComponent } from './jdb-bank.component';

describe('JdbBankComponent', () => {
  let component: JdbBankComponent;
  let fixture: ComponentFixture<JdbBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdbBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdbBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
