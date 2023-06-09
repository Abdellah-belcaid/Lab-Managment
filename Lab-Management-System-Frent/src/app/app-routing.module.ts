import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtablissementComponent } from './components/admin/etablissement/etablissement.component';
import { LaboratoireComponent } from './components/admin/laboratoire/laboratoire.component';
import { MembreComponent } from './components/membre/membre.component';
import { ProjetComponent } from './components/membre/projet/projet.component';
import { ResponsableComponent } from './components/responsable/responsable.component';
import { ExpressionBesoinComponent } from './components/membre/expression-besoin/expression-besoin.component';
import { DotationUcaRechComponent } from './components/admin/dotation-uca-rech/dotation-uca-rech.component';


const routes: Routes = [

  // { path: '', redirectTo: "home", pathMatch: "prefix" },
  { path: 'admin/etablissements', component: EtablissementComponent },
  { path: 'admin/laboratoires', component: LaboratoireComponent },
  { path: 'membre', component: MembreComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'responsable', component: ResponsableComponent },
  { path: 'expressionBesoin', component: ExpressionBesoinComponent },
  { path: 'dotation-uca-rech', component: DotationUcaRechComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
