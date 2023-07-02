import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{

  constructor(private postService: ApiService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      console.log(data)
    })
  }
}