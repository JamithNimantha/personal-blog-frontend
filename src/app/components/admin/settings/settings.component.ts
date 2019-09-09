import { Component, OnInit } from '@angular/core';
import {DetailService} from '../../../core/service/detail.service';
import {AlertService} from '../../../core/service/alert.service';
import {Detail} from '../../../core/dto/Detail';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  detail: Detail = new Detail();
  constructor(private detailService: DetailService, private alertService: AlertService) { }

  ngOnInit() {
    this.getDetails();
  }
  private getDetails() {
    this.detailService.getDetails().subscribe(data => {
      this.detail = data;
    });
  }

  onUpdate() {
    this.detailService.updateDetails(this.detail).subscribe(data => {
      if (data) {
        this.alertService.showToaster('Details Saved !', 'SUCCESS');
      } else {
        this.alertService.showToaster('Cannot Save Details', 'ERROR');
      }
    });
  }

}
