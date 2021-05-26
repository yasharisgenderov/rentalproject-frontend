import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImageDetail } from '../models/carImageDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimagedetailService {

  apiUrl = 'https://localhost:44307/api/'
  constructor(private httpClient:HttpClient) { }

  getCarImagesDetailsByCarId(carId:Number):Observable<ListResponseModel<CarImageDetail>>{
    let newPath=this.apiUrl+'carimages/getallbycarId?carId='+carId;
    return this.httpClient.get<ListResponseModel<CarImageDetail>>(newPath)
}}
