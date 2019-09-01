import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-a-post',
  templateUrl: './create-a-post.component.html',
  styleUrls: ['./create-a-post.component.css']
})
export class CreateAPostComponent implements OnInit {

  image: any = 'assets/square-image.png';

  constructor() { }

  ngOnInit() {
  }

  setVenueImage($event) {
    this.image = $event;
    alert(this.image);
  }

}
