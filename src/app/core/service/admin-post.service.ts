import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../dto/Post';
import {Observable} from 'rxjs';
import {SETTINGS} from '../settings/SETTINGS';

@Injectable({
  providedIn: 'root'
})
export class AdminPostService {

  constructor(private httpClient: HttpClient) { }

  savePost(post: Post): Observable<any> {
    return this.httpClient.post<any>(SETTINGS.ENDPOINTS.createPost.url, post);
  }

  getAllPosts(): Observable<Array<Post>> {
    return this.httpClient.get<Array<Post>>(SETTINGS.ENDPOINTS.getAllPosts.url);
  }

  changeStatus(id: number): Observable<boolean> {
    return this.httpClient.get<boolean>(SETTINGS.ENDPOINTS.changePostStatus.url + id);
  }

  deletePost(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(SETTINGS.ENDPOINTS.deletePost.url + id);
  }

}
