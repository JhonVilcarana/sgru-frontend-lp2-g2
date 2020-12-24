import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Semestre } from 'src/app/models/semestre/semestre';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {
  urlSemestre = Global.url + 'semestre';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getSemestres(): Observable<any> {
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get(this.urlSemestre + '/all', { headers: headers });

  }
  getSemestre(id:number):Observable<Object>{
    return this.http.get(`${this.urlSemestre}/${id}`);
  }
  deleteSemestre(id: number): Observable<number> {
    console.log(id);
    console.log(this.urlSemestre);
    return this.http.delete<number>(this.urlSemestre + "/delete/" + id, { headers: this.httpHeaders });
  }
  addSemestre(semestre:Semestre): Observable<number>{
    console.log(semestre);
    return this.http.post<number>(this.urlSemestre + '/create', semestre,{headers:this.httpHeaders})

  }
  updateSemestre(semestre: Semestre):Observable<number> {
    console.log(semestre);
    return this.http.put<number>(`${this.urlSemestre}/update/${semestre.semestre_id}`, semestre,{headers:this.httpHeaders});
  }
  
}
