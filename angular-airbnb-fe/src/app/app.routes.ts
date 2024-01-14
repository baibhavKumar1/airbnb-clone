import { Routes } from '@angular/router';
import { SecondComponent } from './components/second/second.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NoteComponent } from './pages/note/note.component';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './components/single/single.component';
import { BookComponent } from './components/book/book.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'home/:id', component: SingleComponent },
    { path: 'book/:id', component: BookComponent },
    { path: 'note', component: NoteComponent },
    { path: 'second', component: SecondComponent },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];
