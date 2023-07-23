import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailValidator } from 'src/app/shared/validators/app-email-validaror';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/validators/constants';
import { UserService } from '../user.service';

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
export class ProfileComponent implements OnInit{
  isEditMode: boolean = false;
  profileDetails: Profile = {
    username: '',
    email: '',
    tel: ''
  }

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    tel: ['']
  })

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    const {username, email, tel} = this.userService.user! 
      this.profileDetails = {
        username,
        email,
        tel
      }
      this.form.setValue({
        username,
        email,
        tel
      })
      
    }


  saveProfileHandler():void {
    if(this.form.invalid) {
      return
    }

    this.profileDetails = {...this.form.value} as Profile
    const {username, email, tel} = this.profileDetails;

    this.userService.updateProfile(username!, email!, tel!).subscribe(()=> {
      this.toggleEditMode();
    })
 
  }

  toggleEditMode(): void {
    this.isEditMode = !this.isEditMode;
  }



}
