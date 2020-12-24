import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Niv_comp } from 'src/app/models/niv_comp/niv_comp';
import { Global } from 'src/app/services/global';

@Injectable({
  providedIn: 'root'
})
export class NivCompService {
  urlniv_comp = Global.url + 'nivel_competencias';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }
  
  getNivcomp(id:number):Observable<Object>{
    return this.http.get(`${this.urlniv_comp}/${id}`);
  }
  getniv_comp(): Observable<any> {
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get(this.urlniv_comp + '/all', { headers: headers });
}

getAll():Observable<Object[]>{
  return this.http.get<Object[]>(this.urlniv_comp+'/nivcomp');
}
getAsignacion(id:number):Observable<Object> {
  return this.http.get(`${this.urlniv_comp}/${id}`);
}
add(niv_comp:Niv_comp): Observable<number>{
  return this.http.post<number>(this.urlniv_comp+"/create", niv_comp, {headers:this.httpHeaders});
}

delete(id:number): Observable<number>{
  return this.http.delete<number>(this.urlniv_comp+"/delete/" + id,{headers:this.httpHeaders});
}
update(niv_comp: Niv_comp):Observable<number> {
  return this.http.put<number>(`${this.urlniv_comp}/update/${niv_comp.nivel_competencias_id}`, niv_comp,{headers:this.httpHeaders});
}
getCompetencias():Observable<Object[]>{
  return this.http.get<Object[]>(this.urlniv_comp+'/comp');
}
getNiveles():Observable<Object[]>{
  return this.http.get<Object[]>(this.urlniv_comp+'/niv');
}
}