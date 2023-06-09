import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DotationUcaRech } from '../model/dotationUcaRech.model';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}/api/v1/dotation-uca-rech`

@Injectable({
  providedIn: 'root'
})
export class DotationUcaRechService {


  constructor(private http: HttpClient) { }

  addDotationUcaRech(dotationUcaRech: DotationUcaRech): Observable<DotationUcaRech> {
    return this.http.post<DotationUcaRech>(baseUrl, dotationUcaRech);
  }

  getAllDotationUcaRech(): Observable<DotationUcaRech[]> {
    return this.http.get<DotationUcaRech[]>(baseUrl);
  }

  getDotationUcaRechById(id: number): Observable<DotationUcaRech> {
    return this.http.get<DotationUcaRech>(`${baseUrl}/${id}`);
  }

  updateDotationUcaRech(id: number, dotationUcaRech: DotationUcaRech): Observable<DotationUcaRech> {
    return this.http.put<DotationUcaRech>(`${baseUrl}/${id}`, dotationUcaRech);
  }

  deleteDotationUcaRech(id: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/${id}`);
  }
}
