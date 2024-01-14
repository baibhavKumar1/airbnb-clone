import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
import { SecondComponent } from './components/second/second.component';
import { FirstComponent } from './components/first/first.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,RouterLinkActive , SecondComponent,FirstComponent,NavComponent,LoginComponent,RegisterComponent,FooterComponent,SearchComponent],
  templateUrl: './app.component.html',
})
export class AppComponent{
   
}
