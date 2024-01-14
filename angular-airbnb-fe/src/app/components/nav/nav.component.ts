import { NoteService } from './../../service/note.service';
import { Component, OnInit,inject } from '@angular/core';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { NoteComponent } from '../../pages/note/note.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapApple } from '@ng-icons/bootstrap-icons';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider'
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FirstComponent,SecondComponent,RouterLink,RouterOutlet,RouterLinkActive,LoginComponent,CommonModule,NoteComponent,NgIconComponent,MatMenuModule,MatButtonModule,MatDividerModule],
  templateUrl: './nav.component.html',
  viewProviders:[provideIcons({bootstrapApple})]
})
export class NavComponent implements OnInit{
  authService = inject(AuthService);
  title = 'angular-airbnb-fe';
  token= localStorage.getItem("token")
  constructor(private noteService:NoteService){}
  ngOnInit(): void {
    console.log(this.token)
      this.noteService.getUser(this.token)
      .subscribe({
        next:(response)=> {
          console.log('response',response);
          this.authService.currentUserSig.set(response)
        },
        error:()=>{
          this.authService.currentUserSig.set(null)
        }
      })
  }

  logout():void{
    console.log('logout');
    localStorage.removeItem('token');
    this.authService.currentUserSig.set(null)
  }
}
