import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

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

}
