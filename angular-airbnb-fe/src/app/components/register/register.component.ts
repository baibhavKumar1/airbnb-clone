import { Component ,inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,ReactiveFormsModule,Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    pass: ['', Validators.required],
  });

  onSubmit(): void {
    const user=this.form.getRawValue()
    console.log(this.form.getRawValue())
    this.http
      .post('http://localhost:3000/users/register',
        user
      )
      .subscribe((response:any) => {
        console.log('response', response);
        localStorage.setItem('token', response.token);
        this.authService.currentUserSig.set(response.newUser);
        this.router.navigateByUrl('/');
      });
  }
}
