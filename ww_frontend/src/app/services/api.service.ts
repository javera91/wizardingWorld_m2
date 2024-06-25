import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable(
  {
    providedIn: 'root'
  })
  export class ApiService {
  private url = 'http://localhost:3000'; // sservidor backend

  constructor(private http: HttpClient) { }

  create<T>(item: T): Observable<T> {
      return this.http.post<T>(`${this.url}/students`, item);
  } 
  getAll<T>(): Observable<any> {
      return this.http.get(`${this.url}/students`);
  }

  update<T>(id: string, item: T): Observable<T> {
      return this.http.put<T>(`${this.url}/students/${id}`, item);
  }

  delete <T>(id: string): Observable<T> {
      return this.http.delete<T>(`${this.url}/students/${id}`);
  }
}