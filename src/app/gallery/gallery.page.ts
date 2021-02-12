import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor() { }
weeding=[
{dscrpt:'Desain pernikahan',image:"assets/Desain pernikahan.jpg"},
{dscrpt:'Bedouin Tent',image:"assets/tent.jpg"},{dscrpt:"Traditional Local Fare",image:"assets/traditional.jpg"},
{dscrpt:'Tribe',image:"assets/tribe.jpg"},
{dscrpt:'Homemade Cuisine',image:"assets/homemade-xhosan-cuisine.jpg"},
{dscrpt:'Douin Tent',image:"assets/Bedouin tent.jpg"}
]
  ngOnInit() {
  }

}
