import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-admin-main-menu',
  templateUrl: './admin-main-menu.component.html',
  styleUrls: ['./admin-main-menu.component.css']
})
export class AdminMainMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.ui.accordion')
      .accordion({
        selector: {
          trigger: '.title'
        }
      });
  }

  logoutModal() {
    $('.ui.basic.modal')
      .modal('show')
    ;
  }

  openUserModal() {
    $('.ui.modal.user')
      .modal({
        blurring: true
      })
      .modal('show')
    ;
  }

  logout() {
  }
}
