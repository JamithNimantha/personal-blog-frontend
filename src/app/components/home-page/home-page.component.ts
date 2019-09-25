import { Component, OnInit } from '@angular/core';
import {AdminPostService} from '../../core/service/admin-post.service';
import {PublicPost} from '../../core/dto/PublicPost';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  posts: PublicPost[] = [];

  constructor(private postService: AdminPostService) { }

  ngOnInit() {
  this.getAllPosts();
    // $(document).ready(() => {
    //   // fix main menu to page on passing
    //   $('.main.menu').visibility({
    //     type: 'fixed'
    //   });
    //   $('.overlay').visibility({
    //     type: 'fixed',
    //     offset: 80
    //   });
    //
    //   // lazy load images
    //   $('.image').visibility({
    //     type: 'image',
    //     transition: 'vertical flip in',
    //     duration: 500
    //   });
    //
    //   // show dropdown on hover
    //   $('.main.menu  .ui.dropdown').dropdown({
    //     on: 'hover'
    //   });
    // });

  }
  private getAllPosts() {
    this.postService.getAllPublicPosts().subscribe(data => {
        this.posts = data;
    });
  }

  public onReadMore(post) {
    console.log(post);
  }

}
