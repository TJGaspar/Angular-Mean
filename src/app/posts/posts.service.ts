import { Injectable } from '@angular/core';
import { Post } from './post.model';
import {Subject} from 'rxjs'


@Injectable ({providedIn:'root'})
export class PostService {

 private posts: Post[]=[];
 private postsUpdated= new Subject<Post[]>();

  getPosts (){
    return [...this.posts];
  }

  getPostUpdateListner(){
    return this.postsUpdated.asObservable();
  }


  setPost(title: string, content: string) {
    const post: Post ={ title: title, content: content}
    this.posts.push(post);
    this.postsUpdated.next([...this.posts])
  }
}
