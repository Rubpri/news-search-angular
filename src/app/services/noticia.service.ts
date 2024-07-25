import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const URL = "https://newsapi.org/v2/top-headlines?country=" + parametros.pais + "&category=" + parametros.categoria + "&apiKey=35520cbdbc664f3eb27eb0ca2288b927";
    
    return this.http.get(URL)
  }

}
