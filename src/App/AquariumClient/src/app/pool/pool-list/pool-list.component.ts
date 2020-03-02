import { Component, OnInit } from '@angular/core';
import { Pool } from '../../model/pool';
import { Sector } from '../../model/sector';
import {PoolService} from "../pool.service";

@Component({
  selector: 'app-pool-list',
  templateUrl: './pool-list.component.html',
  styleUrls: ['./pool-list.component.css']
})

export class PoolListComponent implements OnInit {

  pools:Pool[];

  constructor(private poolService: PoolService) {
  }

  //ngOnInit(): void { }

  ngOnInit() {
    this.poolService.findAll().subscribe(data => {
      this.pools = data;
      console.log(data);
    });
  }

  onDeletePool(id: number) {
    this.poolService.delete(id).subscribe(response => {
      console.log("deleted OK");
      this.ngOnInit();
    })
  }
}
