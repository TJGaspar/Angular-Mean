import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts=[
  //   {title: "first post", content: "the content of the first post"},
  //   {title: "second post", content: "the content of the second post"},
  //   {title: "third post", content: "the content of the third post"},
  // ]

  @Input() posts: Post[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
