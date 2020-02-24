import { Component, OnInit } from '@angular/core';
import {Specie} from "../model/specie";
import {SpecieService} from "../service/specie.service";

@Component({
  selector: 'app-specie-list',
  templateUrl: './specie-list.component.html',
  styleUrls: ['./specie-list.component.css']
})
export class SpecieListComponent implements OnInit {

  species : Specie[];

  specie1 : Specie = {
    id: 1,
    name: 'crocodile',
    lifeSpan : 20,
  };

  constructor(private specieService: SpecieService) {
  }

  ngOnInit() {
   this.specieService.findAll().subscribe(data => {
      this.species = data;
     console.log(data);
   });
  }

}