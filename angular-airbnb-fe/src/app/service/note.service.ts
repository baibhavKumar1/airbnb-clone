import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  
  private apiUrl= 'http://localhost:3000/note';
  constructor(private http:HttpClient) { }

  getNote(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
  getUser(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/users/',data)
  }
  createNote(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/note/create',data)
  }
  deleteNote(data:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/note/delete/${data}`)
  }
}
