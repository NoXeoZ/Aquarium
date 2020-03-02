import { Component, OnInit } from '@angular/core';
import {Animal} from "../../model/animal";
import {ActivatedRoute, Router} from "@angular/router";
import {AnimalService} from "../../animal/animal.service";
import {SpecieService} from "../../specie/specie.service";
import {Observable} from "rxjs";
import {Specie} from "../../model/specie";

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {

  animal: Animal;
  species: Specie[];

  ngOnInit(): void {
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService,
    private speciesService: SpecieService) {
    this.animal = new Animal();
    this.speciesService.findAll()
        .subscribe(species => {
          this.species = species as Specie[]
        })
  }

  onSubmit() {
    this.animalService.save(this.animal).subscribe(result => this.back());
  }

  back() {
    this.router.navigate(['/animals']).then(r=>console.log("create OK"));
  }
}
