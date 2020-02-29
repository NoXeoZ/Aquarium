import { Component, OnInit } from '@angular/core';
import {Pool} from "../../model/pool";
import {ActivatedRoute, Router} from "@angular/router";
import {PoolService} from "../../pool/pool.service";
import {SectorService} from "../../sector/sector.service";
import {Observable} from "rxjs";
import {Sector} from "../../model/sector";



@Component({
  selector: 'app-pool-form',
  templateUrl: './pool-form.component.html',
  styleUrls: ['./pool-form.component.css']
})
export class PoolFormComponent implements OnInit {

  pool: Pool;
  sectors: Sector[];

  ngOnInit(): void {
    this.sectorsService.findAll()
      .subscribe(sectors => {
        this.sectors = sectors as Sector[]
      })
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private poolService: PoolService,
    private sectorsService: SectorService) {
    this.pool = new Pool();
  }

  onSubmit() {
    this.poolService.save(this.pool).subscribe(result => this.gotoPoolList());
  }

  gotoPoolList() {
    this.router.navigate(['/pools']).then(r=>console.log("create OK"));
  }
}
