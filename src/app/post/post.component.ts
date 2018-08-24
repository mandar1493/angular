import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts :any[];


  constructor(private service:PostService) {
   }

   ngOnInit(){
    this.service.getPosts()
    .subscribe(response =>{
      this.posts = response.json();
    });
   }

    createPost(firstname:HTMLInputElement){
      let post = {name: firstname.value}
      firstname.value = '';

      this.service.createPost(post)
        .subscribe(response =>{
          post['id'] =response.json().id;
          this.posts.splice(0,0,post);

        });
   }
/*
   updatePost(post){
     this.service.updatePost(post)
        .subscribe(response=>{
         console.log(response.json());
       });
     }
*/
    deletePost(post){
      this.service.deletePost(post.id)
        .subscribe(response =>{
          let index = this.posts.indexOf(post);
          this.posts.splice(index,1);
        });
    }

}
