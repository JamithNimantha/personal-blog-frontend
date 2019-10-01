import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Detail} from '../dto/Detail';
import {SETTINGS} from '../settings/SETTINGS';
import {Stat} from '../dto/Stat';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private httpClient: HttpClient) { }

  getDetails(): Observable<Detail> {
    return this.httpClient.get<Detail>(SETTINGS.ENDPOINTS.getDetails.url);
  }

  updateDetails(detail: Detail): Observable<boolean> {
    return this.httpClient.put<boolean>(SETTINGS.ENDPOINTS.updateDetail.url, detail);
  }

  getStats(): Observable<Stat> {
    return this.httpClient.get<Stat>(SETTINGS.ENDPOINTS.getStats.url);
  }
}
