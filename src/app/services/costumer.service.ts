import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {custumor} from "../model/custumor.model";

@Injectable({
  providedIn: 'root'
})
export class CostumerService {
  baseUrl = 'http://localhost:8085';

  constructor(private http: HttpClient) {
  }
  //Represents a sequence of asynchronous events or data.
  public getCostumers(): Observable<Array<custumor>> {
    return this.http.get<Array<custumor>>(this.baseUrl + '/custumors');
  }
  public searchCustumores(keyword: string): Observable<Array<custumor>> {
    return this.http.get<Array<custumor>>(this.baseUrl + '/custumors/search?keyword=' + keyword);
  }
//retourner objet cust
  public savecustumor(custumor:custumor): Observable<custumor>{
    return this.http.post<custumor>(this.baseUrl + '/custumors', custumor);
  }
//je mit rien dans le retour car c eat void
  public deleteCustumor(id: number) {
    return this.http.delete(this.baseUrl + '/custumors/' + id);
  }
}
