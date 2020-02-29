import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent} from "./animal/animal-list/animal-list.component";
import {SpecieListComponent} from "./specie/specie-list/specie-list.component";
import {SpecieFormComponent} from "./specie/specie-form/specie-form.component";
import {AnimalFormComponent} from "./animal/animal-form/animal-form.component";
import {SectorListComponent} from "./sector/sector-list/sector-list.component";
import {SectorFormComponent} from "./sector/sector-form/sector-form.component";


const routes: Routes = [
  {path: 'animals', component: AnimalListComponent},
  {path: 'species', component: SpecieListComponent},
  {path: 'species/add', component: SpecieFormComponent},
  {path: 'animals/add', component: AnimalFormComponent},
  {path: 'sectors', component: SectorListComponent},
  {path: 'sectors/add', component: SectorFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
