import { Component, OnInit } from '@angular/core';
import {Post} from '../../../core/dto/Post';
import {AdminPostService} from '../../../core/service/admin-post.service';
import {AlertService} from '../../../core/service/alert.service';
@Component({
  selector: 'app-create-a-post',
  templateUrl: './create-a-post.component.html',
  styleUrls: ['./create-a-post.component.css']
})
export class CreateAPostComponent implements OnInit {

  image: any = 'assets/square-image.png';
  post: Post = new Post();
  constructor(private adminPostService: AdminPostService, private alertService: AlertService) { }

  ngOnInit() {
  }

  setFeaturedImage($event) {
    this.image = $event;
  }

  onSave() {
    this.post.image = this.image;
    if ((this.post.title != null || this.post.title !== undefined) &&
      (this.post.content != null || this.post.content !== undefined)) {
      this.adminPostService.savePost(this.post).subscribe(data => {
        if (data) {
          this.alertService.showToaster('New Post Created', 'SUCCESS');
          this.post = new Post();
          this.image = 'assets/square-image.png';
        } else {
          this.alertService.showToaster('Cannot Create New Post', 'ERROR');
        }
      });
    } else {
      this.alertService.showToaster('Title or Content is Empty', 'WARNING');
    }
  }

}
