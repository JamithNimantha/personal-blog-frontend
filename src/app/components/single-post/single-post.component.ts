import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor() { }

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
  }

}
