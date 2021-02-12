import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery1',
  templateUrl: './gallery1.page.html',
  styleUrls: ['./gallery1.page.scss'],
})
export class Gallery1Page implements OnInit {

  constructor() { }
  weeding=[
    {dscrpt:'Gas Catering Equipment',image:"assets/gas-catering-equipment-500x500.jpg"},
    {dscrpt:'6pcs Eiffel Tower',image:"assets/6-pcs-wedding-eiffel-tower-32-vases-clear-vase32-clr-5138325012543.jpg"},
    {dscrpt:"Zulu Traditional Fare",image:"assets/zulu traditional.webp"},
    {dscrpt:'Raspberry pink champagne floats',image:"assets/image.jpg"},
    {dscrpt:'Cuisine',image:"assets/10.jpg"},
    {dscrpt:'Pinky Chairs',image:"assets/chairs.jpg"}
    ]
  ngOnInit() {
  }

}
