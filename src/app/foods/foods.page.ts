import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {

  constructor() { }
  weeding=[
    {dscrpt:'Cuisine',price:'R1020.00',image:"assets/10.jpg"}
    ]
  ngOnInit() {
  }

}
