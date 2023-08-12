import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/admin/dashboard-admin/content/content.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { AddDotationUcaRechModalComponent } from './components/admin/dotation-uca-rech/add-dotation-uca-rech-modal/add-dotation-uca-rech-modal.component';
import { AddDotationMembreModalComponent } from './components/admin/dotation-uca-rech/dotation-membre/add-dotation-membre-modal/add-dotation-membre-modal.component';
import { DotationMembreComponent } from './components/admin/dotation-uca-rech/dotation-membre/dotation-membre.component';
import { DotationUcaRechComponent } from './components/admin/dotation-uca-rech/dotation-uca-rech.component';
import { EditDotationUcaRechModalComponent } from './components/admin/dotation-uca-rech/edit-dotation-uca-rech-modal/edit-dotation-uca-rech-modal.component';
import { AddEtablissementModalComponent } from './components/admin/etablissement/add-etablissement-modal/add-etablissement-modal.component';
import { EditEtablissementModalComponent } from './components/admin/etablissement/edit-etablissement-modal/edit-etablissement-modal.component';
import { EtablissementComponent } from './components/admin/etablissement/etablissement.component';
import { AddLaboratoireModalComponent } from './components/admin/laboratoire/add-laboratoire-modal/add-laboratoire-modal.component';
import { BudgetDataSummeryComponent } from './components/admin/laboratoire/budget-data-summery/budget-data-summery.component';
import { EditLaboratoireModalComponent } from './components/admin/laboratoire/edit-laboratoire-modal/edit-laboratoire-modal.component';
import { LaboratoireComponent } from './components/admin/laboratoire/laboratoire.component';
import { AddDirectorModalComponent } from './components/director/add-director-modal/add-director-modal.component';
import { DashboardDirectorComponent } from './components/director/dashboard-director/dashboard-director.component';
import { EditDirectorModalComponent } from './components/director/edit-director-modal/edit-director-modal.component';
import { SpinnerComponent } from './components/elements/spinner/spinner.component';
import { LoginComponent } from './components/guest/login/login.component';
import { AddMembreModalComponent } from './components/membre/add-membre-modal/add-membre-modal.component';
import { DashboardMembreComponent } from './components/membre/dashboard-membre/dashboard-membre.component';
import { EditMembreModalComponent } from './components/membre/edit-membre-modal/edit-membre-modal.component';
import { AddExpressionBesoinModalComponent } from './components/membre/expression-besoin/add-expression-besoin-modal/add-expression-besoin-modal.component';
import { EditExpressionBesoinModalComponent } from './components/membre/expression-besoin/edit-expression-besoin-modal/edit-expression-besoin-modal.component';
import { ExpressionBesoinComponent } from './components/membre/expression-besoin/expression-besoin.component';
import { MembreComponent } from './components/membre/membre.component';
import { AddProjetModalComponent } from './components/membre/projet/add-projet-modal/add-projet-modal.component';
import { AddDotationProjectModalComponent } from './components/membre/projet/dotation-projet/add-dotation-projet-modal/add-dotation-projet-modal.component';
import { DotationProjetComponent } from './components/membre/projet/dotation-projet/dotation-projet.component';
import { EditDotationProjetModalComponent } from './components/membre/projet/dotation-projet/edit-dotation-projet-modal/edit-dotation-projet-modal.component';
import { EditProjetModalComponent } from './components/membre/projet/edit-projet-modal/edit-projet-modal.component';
import { ProjetComponent } from './components/membre/projet/projet.component';
import { AddResponsableModalComponent } from './components/responsable/add-responsable-modal/add-responsable-modal.component';
import { EditResponsableModalComponent } from './components/responsable/edit-responsable-modal/edit-responsable-modal.component';
import { ResponsableComponent } from './components/responsable/responsable.component';
import { LoadingInterceptor } from './guards/loading.interceptor';



@NgModule({
  declarations: [
    AppComponent,

    EtablissementComponent,
    AddEtablissementModalComponent,
    EditEtablissementModalComponent,

    LaboratoireComponent,
    AddLaboratoireModalComponent,
    EditLaboratoireModalComponent,
    BudgetDataSummeryComponent,

    MembreComponent,
    AddMembreModalComponent,
    EditMembreModalComponent,

    ProjetComponent,
    AddProjetModalComponent,
    EditProjetModalComponent,



    ResponsableComponent,
    AddResponsableModalComponent,
    EditResponsableModalComponent,

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
    EditDirectorModalComponent,

    LoginComponent,

    DashboardAdminComponent,
    ContentComponent,
    DashboardDirectorComponent,
    DashboardMembreComponent,


    SpinnerComponent,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
