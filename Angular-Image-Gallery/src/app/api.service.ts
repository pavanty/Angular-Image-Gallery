import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getallcatimage(): Observable<any> {
    return this.http.get<any>(
      'https://api.thecatapi.com/v1/images/search?limit=36&api_key=live_PIIjYtkpSehA5Zgu34yCdpDAECDLDn6Nc8uCwgIDHkI4YLOuryGaG1ItWqpnOEoc'
    );
  }

  public getcatimagebyid(id: any): Observable<any> {
    return this.http.get<any>('https://api.thecatapi.com/v1/images/' + id);
  }
}
