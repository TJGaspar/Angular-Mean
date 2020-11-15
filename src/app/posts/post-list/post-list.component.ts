import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import { Post } from '../post.model';
import { PostService } from '../posts.service';

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

 posts: Post[] =[];
 private postsSub: Subscription;

  constructor(public postsService: PostService) { }

  ngOnInit(): void {
    this.posts= this.postsService.getPosts();
    this.postsSub= this.postsService.getPostUpdateListner().subscribe((posts:Post[])=> {this.posts=posts;});
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
}
