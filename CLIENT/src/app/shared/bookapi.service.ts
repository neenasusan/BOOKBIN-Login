import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookapiService {

  noAuthHeader = {headers:new HttpHeaders({'NoAuth':'True'})};
  constructor(private http:HttpClient) {}

  getbooks():Observable<any>{

     return this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments");
  }
 


}



