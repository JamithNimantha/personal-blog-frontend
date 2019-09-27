import { Component, OnInit } from '@angular/core';
import {DetailService} from '../../core/service/detail.service';
import {Detail} from '../../core/dto/Detail';

declare var $: any;


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  detail: Detail = new Detail();
  constructor(private detailService: DetailService) { }

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

    this.getDetails();

  }

  private getDetails() {
    this.detailService.getDetails().subscribe(value => {
        this.detail = value;
    });
  }

}
