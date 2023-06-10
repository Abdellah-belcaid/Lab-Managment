import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEtablissementModalComponent } from './components/admin/etablissement/add-etablissement-modal/add-etablissement-modal.component';
import { EditEtablissementModalComponent } from './components/admin/etablissement/edit-etablissement-modal/edit-etablissement-modal.component';
import { EtablissementComponent } from './components/admin/etablissement/etablissement.component';
import { AddLaboratoireModalComponent } from './components/admin/laboratoire/add-laboratoire-modal/add-laboratoire-modal.component';
import { EditLaboratoireModalComponent } from './components/admin/laboratoire/edit-laboratoire-modal/edit-laboratoire-modal.component';
import { LaboratoireComponent } from './components/admin/laboratoire/laboratoire.component';
import { SidenavWrapperComponent } from './components/elements/sidenav-wrapper/sidenav-wrapper.component';
import { AddMembreModalComponent } from './components/membre/add-membre-modal/add-membre-modal.component';
import { EditMembreModalComponent } from './components/membre/edit-membre-modal/edit-membre-modal.component';
import { AddExpressionBesoinModalComponent } from './components/membre/expression-besoin/add-expression-besoin-modal/add-expression-besoin-modal.component';
import { EditExpressionBesoinModalComponent } from './components/membre/expression-besoin/edit-expression-besoin-modal/edit-expression-besoin-modal.component';
import { ExpressionBesoinComponent } from './components/membre/expression-besoin/expression-besoin.component';
import { MembreComponent } from './components/membre/membre.component';
import { AddProjetModalComponent } from './components/membre/projet/add-projet-modal/add-projet-modal.component';
import { AddDotationProjectModalComponent } from './components/membre/projet/dotation-projet/add-dotation-projet-modal/add-dotation-projet-modal.component';
import { EditDotationProjetModalComponent } from './components/membre/projet/dotation-projet/edit-dotation-projet-modal/edit-dotation-projet-modal.component';
import { EditProjetModalComponent } from './components/membre/projet/edit-projet-modal/edit-projet-modal.component';
import { ProjetComponent } from './components/membre/projet/projet.component';
import { AddResponsableModalComponent } from './components/responsable/add-responsable-modal/add-responsable-modal.component';
import { EditResponsableModalComponent } from './components/responsable/edit-responsable-modal/edit-responsable-modal.component';
import { ResponsableComponent } from './components/responsable/responsable.component';
import { DotationProjetComponent } from './components/membre/projet/dotation-projet/dotation-projet.component';
import { DotationMembreComponent } from './components/admin/dotation-uca-rech/dotation-membre/dotation-membre.component';
import { AddDotationMembreModalComponent } from './components/admin/dotation-uca-rech/dotation-membre/add-dotation-membre-modal/add-dotation-membre-modal.component';
import { EditDotationUcaRechModalComponent } from './components/admin/dotation-uca-rech/edit-dotation-uca-rech-modal/edit-dotation-uca-rech-modal.component';
import { AddDotationUcaRechModalComponent } from './components/admin/dotation-uca-rech/add-dotation-uca-rech-modal/add-dotation-uca-rech-modal.component';
import { DotationUcaRechComponent } from './components/admin/dotation-uca-rech/dotation-uca-rech.component';
import { AddDirectorModalComponent } from './components/director/add-director-modal/add-director-modal.component';
import { EditDirectorModalComponent } from './components/director/edit-director-modal/edit-director-modal.component';



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

    ProjetComponent,
    AddProjetModalComponent,
    EditProjetModalComponent,
    SidenavWrapperComponent,
    ResponsableComponent,
    AddResponsableModalComponent,
    EditResponsableModalComponent,
    EditDotationProjetModalComponent,
    EditDotationProjetModalComponent,

    ExpressionBesoinComponent,
    AddExpressionBesoinModalComponent,
    EditExpressionBesoinModalComponent,


    AddDotationProjectModalComponent,
    EditDotationProjetModalComponent,
    DotationProjetComponent,

    DotationMembreComponent,
    AddDotationMembreModalComponent,

    DotationUcaRechComponent,
    AddDotationUcaRechModalComponent,
    EditDotationUcaRechModalComponent,

    AddDirectorModalComponent,
    EditDirectorModalComponent

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
