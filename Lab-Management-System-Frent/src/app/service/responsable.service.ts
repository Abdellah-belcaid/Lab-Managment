import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExpressionBesoin } from '../model/expressionBesoin.model';
import { Responsable } from '../model/responsable.model';

const baseUrl = `${environment.apiUrl}/api/v1/responsables`;
@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(private http: HttpClient) {}

  addResponsable(responsable: Responsable): Observable<Responsable> {
    console.log(responsable);
    return this.http.post<Responsable>(baseUrl, responsable);
  }

  getAllResponsables(): Observable<Responsable[]> {
    return this.http.get<Responsable[]>(baseUrl);
  }

  getResponsableById(id: number): Observable<Responsable> {
    return this.http.get<Responsable>(`${baseUrl}/${id}`);
  }

  updateResponsable(id: number, responsable: Responsable): Observable<Responsable> {
    return this.http.put<Responsable>(`${baseUrl}/${id}`, responsable);
  }

  deleteResponsable(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }

  getExpressionBesoinsByResponsableId(id: number): Observable<ExpressionBesoin[]> {
    return this.http.get<ExpressionBesoin[]>(`${baseUrl}/${id}/expressionbesoins`);
  }
}
