import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.page.html',
  styleUrls: ['./equipments.page.scss'],
})
export class EquipmentsPage implements OnInit {

  constructor() { }
  weeding=[
    {dscrpt:'Gas Catering Equipment',price:'R2400.00',image:"assets/gas-catering-equipment-500x500.jpg"}
    ]
  ngOnInit() {
  }

}
