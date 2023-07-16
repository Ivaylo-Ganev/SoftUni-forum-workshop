import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validaror';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/validators/constants';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    tel: [""],
    passGroup: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required]]
    },
    {
      validators: [matchPasswordsValidator('password', 'rePassword')]
    }
    )
  })

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  register(): void {
    if(this.form.invalid) {
      return;
    }
    

    // this.userService.register();
    // this.router.navigate(['/']);
  }
}
