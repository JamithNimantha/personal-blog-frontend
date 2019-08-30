import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.main.menu').visibility({
      type: 'fixed'
    });
    // show dropdown on hover
    $('.main.menu  .ui.dropdown').dropdown({
      on: 'hover'
    });

    // Social Media Collapse
    $('#sm-close').click(() => {
      $('.s-media').addClass('sm-collapse');
      $('#sm-open').delay(300).css('left', '0');
    });

    $('#sm-open').click(() => {
      $('#sm-open').css('left', '-60px');
      $('.s-media').removeClass('sm-collapse');

    });

  }

}
