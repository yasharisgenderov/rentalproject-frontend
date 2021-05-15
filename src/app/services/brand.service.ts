import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { CarResponseModel } from '../models/carResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44307/api/brands/getbrandsall';
  constructor(private httpClient: HttpClient) {}

  getBrands():Observable<ListResponseModel<Brand>> {
   return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
