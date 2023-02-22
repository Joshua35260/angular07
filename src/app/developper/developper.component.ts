import { Component, OnInit, Input } from '@angular/core';
import { Developper } from './models/developper';


@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent  {
  @Input() myInputData: string = "";
  developper: Developper = {
    nom: 'Doe',
    prenom: 'John',
    age: 30,
    sexe: 'Mi-Homme',
    biographie: 'Je suis développeur web passionné par les technologies modernes.',
    skills: [
      {
        nom: 'Angular',
        logo: 'https://angular.io/assets/images/logos/angular/angular.png',
        site: 'https://angular.io'
      },
      {
        nom: 'JavaScript',
        logo: 'https://www.freeiconspng.com/thumbs/javascript-png/javascript-vector-icon-11.png',
        site: 'https://developer.mozilla.org/fr/docs/Web/JavaScript'
      }
    ]
  };
}
