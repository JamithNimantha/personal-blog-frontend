import { Component, OnInit } from '@angular/core';
import {AdminPostService} from '../../../core/service/admin-post.service';
import {AlertService} from '../../../core/service/alert.service';
import {Post} from '../../../core/dto/Post';
import {Router} from '@angular/router';
import {DetailService} from '../../../core/service/detail.service';
import {Stat} from '../../../core/dto/Stat';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts: Post[] = [];
  stat: Stat = new Stat();

  constructor(private adminPostService: AdminPostService, private alertService: AlertService,
              private route: Router, private detailService: DetailService) { }

  ngOnInit() {
    this.getAllPosts();
    this.getStats();
  }

  private getStats() {
    this.detailService.getStats().subscribe(data => {
      this.stat = data;
    });
  }

  getAllPosts() {
    this.adminPostService.getAllPosts().subscribe(value => {
      this.posts = value;
    });
  }
  onStatusChange(post: Post) {
    this.adminPostService.changeStatus(post.id).subscribe(data => {
      if (data) {
        this.alertService.showToaster(post.title + ' Status Changed', 'SUCCESS');
      } else {
        this.alertService.showToaster('Cannot Change Status', 'ERROR');
      }
    });
  }
  onView(post) {
    // console.log(post);
    this.route.navigate([post.permalink]);
  }
  onUpdate(post) {
    console.log(post);
  }
  onDelete(post) {
    this.adminPostService.deletePost(post.id).subscribe(data => {
      if (data) {
        this.alertService.showToaster(post.title + ' Removed !', 'SUCCESS');
        // this.posts.splice(post, 1);
        this.getAllPosts();
      } else {
        this.alertService.showToaster('Cannot Remove ' + post.title + 'Error Occurred !', 'ERROR');
      }
    });
  }

}
