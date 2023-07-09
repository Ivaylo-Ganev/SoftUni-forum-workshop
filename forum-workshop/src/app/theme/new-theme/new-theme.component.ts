import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {

  constructor(private apiService: ApiService, private router: Router) {}

  createTheme(name: string, text: string) {
    this.apiService.createTheme(name, text).subscribe(data => {
      console.log(data)
    })
  
  }
  onCancelClick(): void {
    this.router.navigate(['/']);
  }
}
