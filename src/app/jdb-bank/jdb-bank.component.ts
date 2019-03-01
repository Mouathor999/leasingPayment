import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jdb-bank',
  templateUrl: './jdb-bank.component.html',
  styleUrls: ['./jdb-bank.component.css']
})
export class JdbBankComponent implements OnInit {
  navLinks = [
    { path: 'home', label: 'ໜ້າຫຼັກ'},
    { path: 'make-payment', label: 'make-payment' },
    { path: 'transaction-report', label: 'transaction-report' },
    { path: 'reprint-slip', label: 'reprint-slip' },
    { path: 'chang-password', label: 'chang-password' },
  ];
  constructor() { }

  ngOnInit() {

  }


}
