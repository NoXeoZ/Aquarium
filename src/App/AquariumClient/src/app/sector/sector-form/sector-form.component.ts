import { Component, OnInit } from '@angular/core';
import {Sector} from "../../model/sector";
import {ActivatedRoute, Router} from "@angular/router";
import {SectorService} from "../../sector/sector.service";
import {SpecieService} from "../../specie/specie.service";
import {Observable} from "rxjs";
import {Specie} from "../../model/specie";

class Species {
}

@Component({
  selector: 'app-sector-form',
  templateUrl: './sector-form.component.html',
  styleUrls: ['./sector-form.component.css']
})
export class SectorFormComponent implements OnInit {

  sector: Sector;
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
    private sectorService: SectorService,
    private speciesService: SpecieService) {
    this.sector = new Sector();
  }

  onSubmit() {
    this.sectorService.save(this.sector).subscribe(result => this.gotoSectorList());
  }

  gotoSectorList() {
    this.router.navigate(['/sectors']).then(r=>console.log("create OK"));
  }
}
