import { Component, OnInit } from '@angular/core';
import {Specie} from "../../model/specie";
import {SpecieService} from "../specie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-specie-list',
  templateUrl: './specie-list.component.html',
  styleUrls: ['./specie-list.component.css']
})
export class SpecieListComponent implements OnInit {

  species : Specie[];

/*
  specie1 : Specie = {
    id: 1,
    name: 'crocodile',
    lifeSpan : 20,
  };*/

  constructor(private specieService: SpecieService,
              private router: Router,) {
  }

  ngOnInit() {
   this.specieService.findAll().subscribe(data => {
      this.species = data;
     console.log(data);
   });
  }

  countAnimals(specie:Specie){
    let i = 0;
    for(let f of specie.animals){
      i++;
    }
    return i;
  }

  onDeleteSpecie(id: number) {
    this.specieService.delete(id).subscribe(response => {
      console.log("deleted OK");
    })
    this.ngOnInit();
  }
}
