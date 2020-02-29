import { Component, OnInit } from '@angular/core';
import { Sector } from '../../model/sector';
import {SectorService} from "../sector.service";


@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.css']
})
export class SectorListComponent implements OnInit {

  sectors:Sector[];

  constructor(private sectorService: SectorService) {
  }

  //ngOnInit(): void { }

  ngOnInit() {
    this.sectorService.findAll().subscribe(data => {
      this.sectors = data;
      console.log(data);
    });
  }

  onDeleteSector(id: number) {
    this.sectorService.delete(id).subscribe(response => {
      console.log("deleted OK");
    })
    this.ngOnInit();
  }
}
