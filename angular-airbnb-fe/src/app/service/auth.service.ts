import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 currentUserSig= signal<any>(undefined)
  
}
