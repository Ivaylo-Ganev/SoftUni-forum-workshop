import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/validators/constants';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  appEmailDomains = DEFAULT_EMAIL_DOMAINS;
  constructor(private userService: UserService, private router: Router) {}

  loginSubmitHandler(form: NgForm) {
    if(form.invalid) {
      return;
    }
    const {email, password} = form.value;
    
    this.userService.login(email, password).subscribe((data)=> {
      console.log(data);
      this.router.navigate(['/themes']);
   
      
    })
  }
}
