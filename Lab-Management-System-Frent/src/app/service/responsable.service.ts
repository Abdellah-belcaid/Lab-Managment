import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExpressionBesoin } from '../model/expressionBesoin.model';
import { Responsable } from '../model/responsable.model';
import { RespoMarcheService } from './responsable-marche.service';
import { RespoMarche } from '../model/respoMarche.model';
import { RespoAffairesFinancierService } from './respo-affaires-financier.service';
import { RespoAffairesFinancier } from '../model/respoAffairesFinancier .model';
import { Role } from '../model/role.enum';

const baseUrl = `${environment.apiUrl}/api/v1/responsables`;
@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(
    private http: HttpClient,
    private respoMarcheService: RespoMarcheService,
    private respoAffairesFinancierService:RespoAffairesFinancierService
  ) { }

  addResponsable(responsable: any): Observable<any> {
    if (responsable instanceof RespoMarche) {
      responsable.role=Role.RESPOSNABLE_MARCHE;
      return this.respoMarcheService.addRespoMarche(responsable);
    }
    if (responsable instanceof RespoAffairesFinancier) {
      responsable.role=Role.RESPOSNABLE_AFFAIRES_FINANCIER;
      return this.respoAffairesFinancierService.addRespoAffairesFinancier(responsable);
    }

    return this.http.post<any>(baseUrl, responsable);
  }

  getAllResponsables(): Observable<any[]> {

    return this.http.get<any[]>(baseUrl);
  }

  getResponsableById(id: number): Observable<Responsable> {
    return this.http.get<Responsable>(`${baseUrl}/${id}`);
  }

  updateResponsable(id: number, responsable: any): Observable<Responsable> {
    if (responsable.type==='Marche') {
      return this.respoMarcheService.updateRespoMarche(id,responsable);
    }
    if (responsable.type ==="Affaires_Financier") {
      return this.respoAffairesFinancierService.updateRespoAffairesFinancier(id,responsable);
    }
    return this.http.put<Responsable>(`${baseUrl}/${id}`, responsable);
  }

  deleteResponsable(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }

  getExpressionBesoinsByResponsableId(id: number): Observable<ExpressionBesoin[]> {
    return this.http.get<ExpressionBesoin[]>(`${baseUrl}/${id}/expressionbesoins`);
  }
}
