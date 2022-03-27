import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) {}
  
  getCharacters(url): Observable<any>{
  return this.http.get(url);
  }
  
  getCharacter(url): Observable<any>{
  return this.http.get(url);
  }
}
