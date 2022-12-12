import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html'
})
export class PlaceComponent implements OnInit {

  places: any

  _id: string | undefined
  name: string | undefined
  location: string | undefined

  constructor(private service: PlaceService) { }

  getPlaces(): void {
    this.service.getPlaces().subscribe(response => {
      this.places = response
      console.log("Successfully accessed API")
    })
  }

  ngOnInit(): void {
    this.getPlaces()
  }

}
