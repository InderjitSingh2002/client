import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  serverURL: string = environment.serverURL

  constructor(private http: HttpClient) { }

  getPlaces() {
    return this.http.get(`${this.serverURL}/api/places`)
  }
}
