import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminPostService} from '../../core/service/admin-post.service';
import {PublicPost} from '../../core/dto/PublicPost';
import {Comment} from '../../core/dto/Comment';
import {CommentService} from '../../core/service/comment.service';
import {AlertService} from '../../core/service/alert.service';
declare var $: any;

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  permalink: string;
  post: PublicPost = new PublicPost();
  comment: Comment = new Comment();
  comments: Comment[] = [];

  constructor(private activatedRoute: ActivatedRoute, private postService: AdminPostService,
              private router: Router, private commentService: CommentService, private alertSerice: AlertService) { }

  ngOnInit() {
    this.getURLParam();
    this.loadSinglePost(this.permalink);
    this.getAllComments();
    $('.overlay').visibility({
      type: 'fixed',
      offset: 80
    });
    //
    // // lazy load images
    // $('.image').visibility({
    //   type: 'image',
    //   transition: 'vertical flip in',
    //   duration: 500
    // });
  }

  private getURLParam() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.permalink = params.get('permalink');
    });
  }

  private loadSinglePost(permalink: string) {
    this.postService.getSinglePost(permalink).subscribe(data => {
      if (data != null) {
        this.post = data;
      } else {
        this.router.navigateByUrl('');
      }
    });
  }

  onCommentButton() {
    if ((this.comment.name != null || this.comment.id !== undefined) &&
      (this.comment.comment != null || this.comment.comment !== undefined)) {
      this.comment.id = this.post.id;
      this.commentService.saveComment(this.comment).subscribe(data => {
        if (data) {
          this.alertSerice.showToaster('Comment Added', 'SUCCESS');
          this.comment = new Comment();
          this.getAllComments();
        } else {
          this.alertSerice.showToaster('Error ! Cannot Make Comment', 'ERROR');
        }
      });
    } else {
      this.alertSerice.showToaster('Name Or Comment is empty !!', 'WARNING');
    }
  }

  private getAllComments() {
    this.commentService.getAllComment(this.permalink).subscribe( data => {
      this.comments = data;
    });
  }
}
