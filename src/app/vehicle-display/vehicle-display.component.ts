import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


import {Vehicle} from './../vehicle';
@Component({
  selector: 'app-vehicle-display',
  templateUrl: './vehicle-display.component.html',
  styleUrl: './vehicle-display.component.css',
  standalone: true,
  imports: [MatButtonModule, MatCardModule]
})
export class VehicleDisplayComponent {

    @Input() vehicle: Vehicle = new Vehicle(0, "", "", 0, "");

     @Output() removeItemEvent = new EventEmitter();
     @Output() editItemEvent = new EventEmitter();



}
