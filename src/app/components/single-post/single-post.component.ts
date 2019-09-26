import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminPostService} from '../../core/service/admin-post.service';
import {PublicPost} from '../../core/dto/PublicPost';
declare var $: any;

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  permalink: string;
  post: PublicPost = new PublicPost();

  constructor(private activatedRoute: ActivatedRoute, private postService: AdminPostService,
              private router: Router) { }

  ngOnInit() {
    // $(document).ready(() => {
    //   // fix main menu to page on passing
    // });
    $('.overlay').visibility({
      type: 'fixed',
      offset: 80
    });

    // lazy load images
    $('.image').visibility({
      type: 'image',
      transition: 'vertical flip in',
      duration: 500
    });

    // show dropdown on hover
    this.getURLParam();
    this.loadSinglePost(this.permalink);
  }

  private getURLParam() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.permalink = params.get('permalink');
    });
  }

  private loadSinglePost(permalink: string) {
    this.postService.getSinglePost(permalink).subscribe(data => {
      // console.log(data);
      if (data != null) {
        this.post = data;
      } else {
        this.router.navigateByUrl('');
      }
    });
  }

}
