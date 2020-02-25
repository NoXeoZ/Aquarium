import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent} from "./animal/animal-list/animal-list.component";
import {SpecieListComponent} from "./specie/specie-list/specie-list.component";


const routes: Routes = [
  {path: 'animals', component: AnimalListComponent},
  {path: 'species', component: SpecieListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
