import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpressionBesoin } from '../model/expressionBesoin.model';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}/api/v1/expression-besoins`;


@Injectable({
  providedIn: 'root'
})
export class ExpressionBesoinService {


  constructor(private http: HttpClient) { }

  getExpressionBesoin(id: number): Observable<ExpressionBesoin> {
    const url = `${baseUrl}/${id}`;
    return this.http.get<ExpressionBesoin>(url);
  }

  getAllExpressionBesoins(): Observable<ExpressionBesoin[]> {
    return this.http.get<ExpressionBesoin[]>(baseUrl);
  }

  createExpressionBesoin(expressionBesoin: ExpressionBesoin): Observable<ExpressionBesoin> {
    console.log(expressionBesoin);
    return this.http.post<ExpressionBesoin>(baseUrl, expressionBesoin);
  }

  updateExpressionBesoin(expressionBesoin: ExpressionBesoin): Observable<ExpressionBesoin> {
    console.log(expressionBesoin);
    const url = `${baseUrl}/${expressionBesoin.id}`;
    return this.http.put<ExpressionBesoin>(url, expressionBesoin);
  }

  deleteExpressionBesoin(id: number): Observable<void> {
    const url = `${baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
