import { Component, OnInit } from '@angular/core';
import {SpecieService} from "../specie.service";
import {Specie} from "../../model/specie";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-specie-form',
  templateUrl: './specie-form.component.html',
  styleUrls: ['./specie-form.component.css']
})
export class SpecieFormComponent implements OnInit {

  ngOnInit(): void {
  }

  specie: Specie;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private specieService: SpecieService) {
    this.specie = new Specie();
  }

  onSubmit() {
    this.specieService.save(this.specie).subscribe(result => this.gotoSpecieList());
  }

  gotoSpecieList() {
    this.router.navigate(['/species']).then(r=>console.log("create OK"));
  }

}


