import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEtablissementModalComponent } from './components/admin/etablissement/add-etablissement-modal/add-etablissement-modal.component';
import { EditEtablissementModalComponent } from './components/admin/etablissement/edit-etablissement-modal/edit-etablissement-modal.component';
import { EtablissementComponent } from './components/admin/etablissement/etablissement.component';
import { AddLaboratoireModalComponent } from './components/admin/laboratoire/add-laboratoire-modal/add-laboratoire-modal.component';
import { EditLaboratoireModalComponent } from './components/admin/laboratoire/edit-laboratoire-modal/edit-laboratoire-modal.component';
import { LaboratoireComponent } from './components/admin/laboratoire/laboratoire.component';
import { AddMembreModalComponent } from './components/membre/add-membre-modal/add-membre-modal.component';
import { EditMembreModalComponent } from './components/membre/edit-membre-modal/edit-membre-modal.component';
import { ExpressionBesoinComponent } from './components/membre/expression-besoin/expression-besoin.component';
import { MembreComponent } from './components/membre/membre.component';
import { AddProjetModalComponent } from './components/membre/projet/add-projet-modal/add-projet-modal.component';
import { EditProjetModalComponent } from './components/membre/projet/edit-projet-modal/edit-projet-modal.component';
import { ProjetComponent } from './components/membre/projet/projet.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    EtablissementComponent,
    LaboratoireComponent,
    AddEtablissementModalComponent,
    EditEtablissementModalComponent,
    AddLaboratoireModalComponent,
    EditLaboratoireModalComponent,
    MembreComponent,
    AddMembreModalComponent,
    EditMembreModalComponent,
    ExpressionBesoinComponent,
    ProjetComponent,
    AddProjetModalComponent,
    EditProjetModalComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
