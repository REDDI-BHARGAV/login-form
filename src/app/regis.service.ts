import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Regis } from 'src/Reg';

@Injectable({
  providedIn: 'root'
})
export class RegisService {

  private _url: string = " http://localhost:3000/regis";

  constructor(private http: HttpClient) {}

  getRegis(): Observable<Regis[]> {
    
    return this.http.get<Regis[]>(this._url);
  }
  addBook(book: Regis): Observable<Regis> {
    
   
    return this.http.post<Regis>(this._url, book);
  }


}
