import { Component, OnInit } from '@angular/core';
import {Animal} from "../../model/animal";
import {ActivatedRoute, Router} from "@angular/router";
import {AnimalService} from "../../animal/animal.service";
import {SpecieService} from "../../specie/specie.service";
import {Observable} from "rxjs";
import {Specie} from "../../model/specie";

class Species {
}

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  animal: Animal;
  species: Specie[];

  ngOnInit(): void {
    this.speciesService.findAll()
      .subscribe(species => {
        this.species = species as Specie[]
      })
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService,
    private speciesService: SpecieService) {
    this.animal = new Animal();
  }

  onSubmit() {
    this.animalService.save(this.animal).subscribe(result => this.gotoAnimalList());
  }

  gotoAnimalList() {
    this.router.navigate(['/animals']).then(r=>console.log("create OK"));
  }
}
