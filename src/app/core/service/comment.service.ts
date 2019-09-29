import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../dto/Comment';
import {SETTINGS} from '../settings/SETTINGS';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  saveComment(comment: Comment): Observable<boolean> {
    return this.httpClient.post<boolean>(SETTINGS.ENDPOINTS.saveComment.url, comment);
  }

  getAllComment(permalink: string): Observable<Array<Comment>> {
    return this.httpClient.get<Array<Comment>>(SETTINGS.ENDPOINTS.getComment.url + permalink);
  }
}
