import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.css']
})
export class PostCreateComponent{
  enteredTitle="";
  enteredContent="";
 getErrorMessage :string= "please fill the fields in red";

constructor(public postService: PostService){}


  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    // const post: Post={
    //   title: form.value.title,
    //   content: form.value.content,
    // }
    this.postService.setPost(form.value.title, form.value.content);
  }
}
