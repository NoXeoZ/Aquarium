import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/Animal';
import { Specie } from '../model/Specie';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  specie1 : Specie = {
    id: 1,
    name: 'crocodile',
    lifeSpan : 20,
  };

  animals: Animal[] = [{
    id : 1,
    specie :this.specie1,
    name :'String',
    genre:'String',
    arriving: new Date(),
    departure: new Date(),
    marks:'String' // optional
  }];


  constructor(private animalService: AnimalService) {
  }

  ngOnInit(): void {
  }

  /*ngOnInit() {
    this.animalService.findAll().subscribe(data => {
      this.animals = data;
    });
  }*/
}
