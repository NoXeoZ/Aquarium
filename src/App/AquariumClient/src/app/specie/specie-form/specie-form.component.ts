import { Component, OnInit } from '@angular/core';
import {SpecieService} from "../specie.service";
import {Specie} from "../../model/specie";
import {ActivatedRoute, Router} from "@angular/router";
import {PoolService} from "../../pool/pool.service";
import {Pool} from "../../model/pool";

@Component({
  selector: 'app-specie-form',
  templateUrl: './specie-form.component.html',
  styleUrls: ['./specie-form.component.css']
})
export class SpecieFormComponent implements OnInit {

  ngOnInit(): void {
    this.poolService.findAll()
      .subscribe(pools => {
        this.pools = pools as Pool[]
      })
  }

  specie: Specie;
  pools: Pool[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private specieService: SpecieService,
    private poolService: PoolService) {
    this.specie = new Specie();
  }

  onSubmit() {
    this.specieService.save(this.specie).subscribe(result => this.gotoSpecieList());
  }

  gotoSpecieList() {
    this.router.navigate(['/species']).then(r=>console.log("create OK"));
  }

}


