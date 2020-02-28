import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';
import { AnimalService} from "./animal/animal.service";
import { HttpClientModule } from '@angular/common/http';
import { AnimalFormComponent } from './animal/animal-form/animal-form.component';
import { SpecieFormComponent } from './specie/specie-form/specie-form.component';
import { SpecieListComponent } from './specie/specie-list/specie-list.component';
import { SpecieService } from "./specie/specie.service";
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    AnimalFormComponent,
    SpecieFormComponent,
    SpecieListComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [SpecieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
