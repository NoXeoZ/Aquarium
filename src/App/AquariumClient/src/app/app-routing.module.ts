import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent} from "./animal/animal-list/animal-list.component";
import {SpecieListComponent} from "./specie/specie-list/specie-list.component";
import {SpecieFormComponent} from "./specie/specie-form/specie-form.component";


const routes: Routes = [
  {path: 'animals', component: AnimalListComponent},
  {path: 'species', component: SpecieListComponent},
  {path: 'animals/update/:id', component: AnimalListComponent},
  {path: 'species/update/:id', component: SpecieListComponent},
  {path: 'species/add', component: SpecieFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
