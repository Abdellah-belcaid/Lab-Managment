import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { DotationUcaRechComponent } from './components/admin/dotation-uca-rech/dotation-uca-rech.component';
import { EtablissementComponent } from './components/admin/etablissement/etablissement.component';
import { LaboratoireComponent } from './components/admin/laboratoire/laboratoire.component';
import { DashboardDirectorComponent } from './components/director/dashboard-director/dashboard-director.component';
import { LoginComponent } from './components/guest/login/login.component';
import { DashboardMembreComponent } from './components/membre/dashboard-membre/dashboard-membre.component';
import { ExpressionBesoinComponent } from './components/membre/expression-besoin/expression-besoin.component';
import { MembreComponent } from './components/membre/membre.component';
import { ProjetComponent } from './components/membre/projet/projet.component';
import { ResponsableComponent } from './components/responsable/responsable.component';
import { AuthGuard } from './guards/auth.guards';
import { Role } from './model/role.enum';
import { ContentComponent } from './components/admin/dashboard-admin/content/content.component';


const routes: Routes = [

  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: DashboardAdminComponent,
    children: [
      { path: '', component: ContentComponent },
      { path: 'etablissements', component: EtablissementComponent },
      { path: 'laboratoires', component: LaboratoireComponent },
      { path: 'membre', component: MembreComponent },
      { path: 'projet', component: ProjetComponent },
      { path: 'responsable', component: ResponsableComponent },
      { path: 'expressionBesoin', component: ExpressionBesoinComponent },
      { path: 'dotation-uca-rech', component: DotationUcaRechComponent },
    ],
    // canActivate: [AuthGuard],
    // data: { roles: [Role.ADMIN] }
  },

  {
    path: 'director', component: DashboardDirectorComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [Role.ADMIN, Role.DIRECTOR] }
  },

  {
    path: 'membre', component: DashboardMembreComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.MEMBER] }
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
