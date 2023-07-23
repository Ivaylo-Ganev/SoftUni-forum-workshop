import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {

  constructor(private apiService: ApiService, private router: Router) {}

  // createTheme(name: string, text: string) {
  //   this.apiService.createTheme(name, text).subscribe(data => {
  //     console.log(data)
  //   })
  // }
  onCancelClick(): void {
    this.router.navigate(['/']);
  }

  newThemeSubmitHandler(form: NgForm): void {
    if(form.invalid) {
      return
    }
    const {themeName, postText} = form.value;
    this.apiService.createTheme(themeName, postText).subscribe((data) => {
      console.log(data);
      
      this.router.navigate(['/themes']);
    }
    )
    
  }
}
