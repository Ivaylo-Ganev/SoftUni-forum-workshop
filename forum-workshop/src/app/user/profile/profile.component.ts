import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validaror';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/validators/constants';

interface Profile {
  username: string,
  email: string,
  tel: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEditMode: boolean = false;
  profileDetails: Profile = {
    username: 'John Dou',
    email: 'johndou@gmail.com',
    tel: '123 123 123'
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    tel: ['']
  })

  constructor(private fb: FormBuilder) {}

  saveProfileHandler():void {
    if(this.form.invalid) {
      return
    }
    console.log(this.form.value);

    this.profileDetails = {...this.form.value} as Profile
    

    this.toggleEditMode();
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }



}
