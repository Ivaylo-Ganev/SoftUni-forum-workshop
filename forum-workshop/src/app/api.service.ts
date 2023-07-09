import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() {
    const apiUrl = environment.apiUrl;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }
  getPosts(limit?: number) {
    const apiUrl = environment.apiUrl;
    return this.http.get<Post[]>(`${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`);
  }
  getTheme(id: number) {
    const apiUrl = environment.apiUrl;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }
  createTheme(themeName: string, desc: string) {
    const apiUrl = environment.apiUrl;
    return this.http.post<Theme>(`${apiUrl}/themes`, {themeName, desc});
  }
}
