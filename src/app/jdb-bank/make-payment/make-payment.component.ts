import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
  data: string;

  name: string;
  position: number;
  weight: number;
  symbol: string;

  constructor() { }

  ngOnInit() {
    this.data = '';
  }

  searchDetail() {
    // event.preventDefault();
    console.log(this.data);
  }

}
