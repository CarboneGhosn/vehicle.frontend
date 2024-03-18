import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {Vehicle} from '../vehicle';

@Component({
  selector: 'app-vehicle-page',
  templateUrl: './vehicle-page.component.html',
  styleUrl: './vehicle-page.component.css'
})
export class VehiclePageComponent {

vehicles: Vehicle[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Vehicle[]>(
      "http://localhost:8080/vehicles"
    ).subscribe(data => this.vehicles = data);
  }

  appendData(newVehicle: any): void {
    this.vehicles.push(newVehicle);
  }

  removeItem(vehicleId: number): void {
    this.http.delete(
      "http://localhost:8080/vehicles/" + vehicleId,
    ).subscribe(data => this.vehicles = this.vehicles.filter((vehicle: Vehicle) => vehicle.id != vehicleId));
  }

}

