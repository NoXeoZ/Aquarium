import { Component, OnInit } from '@angular/core';
import { Animal } from '../../model/animal';
import { Specie } from '../../model/specie';
import { AnimalService } from '../animal.service';
import { DatePipe } from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals:Animal[];

  constructor(private animalService: AnimalService) {
  }

  ngOnInit() {
    this.animalService.findAll().subscribe(data => {
      this.animals = data;
      console.log(data);
    });
  }

  onDeleteAnimal(id: number) {
    this.animalService.delete(id).subscribe(response => {
      console.log("deleted OK");
      this.ngOnInit();
    })
  }
}
