// import { HttpClient } from '@angular/common/http';
// import { Injectable, Injector } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CrudService {

//   constructor(
//     protected http :HttpClient,
//     protected injector:Injector,
//     private endpoint:string,
//   ) { }
  
//   getAll():Observable<any>{
//     return this.http.get(this.endpoint)
//   }

//   get(id:string):Observable<any>{
//     const url = `http://localhost:3000/notes/${id}`;
//     return this.http.get(url)
//   }

//   private create(record:any):Observable<any>{
//     return this.http.post(this.endpoint,record)
//   }
//   private update(record:any):Observable<any>{
//     return this.http.patch(this.endpoint,record)
//   }
//   private remove(id:any):Observable<any>{
//     const url = `http://localhost:3000/notes/delete/${id}`;
//     return this.http.delete(this.endpoint)
//   }
// }
