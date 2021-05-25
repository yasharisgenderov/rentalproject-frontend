import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44307/api/'
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newpath = this.apiUrl + "cars/getallcars"
    return  this.httpClient.get<ListResponseModel<Car>>(newpath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let newpath = this.apiUrl + "cars/getcarsbybrandId?brandId="+brandId
    return  this.httpClient.get<ListResponseModel<Car>>(newpath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>> {
    let newpath = this.apiUrl + "cars/getcarsbycolorId?colorId="+colorId
    return  this.httpClient.get<ListResponseModel<Car>>(newpath)
  }
}
