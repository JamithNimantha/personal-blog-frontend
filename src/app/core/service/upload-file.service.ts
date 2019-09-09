import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SETTINGS} from '../settings/SETTINGS';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);

    const req = new HttpRequest(SETTINGS.ENDPOINTS.uploadImage.type, SETTINGS.ENDPOINTS.uploadImage.url, formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }
}
