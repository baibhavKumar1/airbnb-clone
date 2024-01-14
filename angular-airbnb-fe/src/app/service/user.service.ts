// import { Injectable, Injector } from '@angular/core';
// import { CrudService } from './crud.service';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// const endpoint=`http://localhost:3000`;

// @Injectable({
//   providedIn: 'root'
// })

// export class UserService extends CrudService{

//   constructor(http:HttpClient,injector:Injector) {super(http,injector,endpoint) }

//   login(email:string,pass:string) :Observable<any>{
//     return this.http.post(endpoint,{email,pass})
//   }
// }
