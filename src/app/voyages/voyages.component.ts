import { Component } from '@angular/core';
import { VOYAGES } from '../mock-voyages';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent {

  voyages = VOYAGES;

}
