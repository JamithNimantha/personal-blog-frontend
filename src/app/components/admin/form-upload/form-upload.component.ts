import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {UploadFileService} from '../../../core/service/upload-file.service';
declare let $: any;


@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
  @Output() image = new EventEmitter();
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = {percentage: 0};
  imageError = false;
  res: any;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    $('#progressbar').progress();
  }

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
      if (this.selectedFiles) {this.upload(); }} else {
      alert('invalid format!');
    }
  }

  upload() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      console.log(event);
      this.res = event;
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.image.emit(event.body);
      }
    });
    if (this.res.ok === false) { this.imageError = true; }
    if (this.res.ok === true) { this.imageError = false; }
    this.selectedFiles = undefined;
  }

}
