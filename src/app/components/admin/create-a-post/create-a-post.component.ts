import { Component, OnInit } from '@angular/core';
import {Post} from '../../../core/dto/Post';
@Component({
  selector: 'app-create-a-post',
  templateUrl: './create-a-post.component.html',
  styleUrls: ['./create-a-post.component.css']
})
export class CreateAPostComponent implements OnInit {

  image: any = 'assets/square-image.png';
  post: Post = new Post();
  constructor() { }

  ngOnInit() {
  }

  setVenueImage($event) {
    this.image = $event;
    // alert(this.image);
  }

  onSave() {
    console.log(this.post);
  }

}
