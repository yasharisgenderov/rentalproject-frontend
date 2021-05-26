import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarimageService } from 'src/app/services/carimage.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-carimage',
  templateUrl: './carimage.component.html',
  styleUrls: ['./carimage.component.css']
})
export class CarimageComponent implements OnInit {

  carimages:CarImage[]=[];
  currentcarimages:CarImage;
  defaultPath = 'https://localhost:44307';
  car!:Car;
  
  constructor(
    private carService:CarService,
    private carImageService:CarimageService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarImagesByCarId(params['carId']);
      }
    });
  }

  getCarImagesByCarId(carId: Number) {
    this.carImageService
      .getCarImagesByCarId(carId)
      .subscribe(response => {
        this.carimages = response.data;
      });
  }

}