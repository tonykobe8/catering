import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decor',
  templateUrl: './decor.page.html',
  styleUrls: ['./decor.page.scss'],
})
export class DecorPage implements OnInit {

  constructor() { }
  weeding=[
    {name:'Pinky Chairs',dscrpt:'Full set Pinky Chairs',price:"R1000.00",image:"assets/chairs.jpg"}
    ]
  ngOnInit() {
  }

}
