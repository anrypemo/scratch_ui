import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'ui-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.less']
})
export class UiAttachmentComponent implements OnInit {

  @ViewChild("fileInput")
  private fileInput: ElementRef;

  @Output()
  public onUpload = new EventEmitter<File[]>();

  public files: File[] = [];


  constructor() {
  }

  ngOnInit() {
  }

  public _onAreaClick() {
    this.fileInput.nativeElement.click();
  }

  public _onFileSelect(event) {
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.files.push(files[i]);
    }
  }

  public _formatSize(bytes: number): string {
    if (bytes === 0) {
      return "0 B";
    }

    let k = 1000,
      dm = 3,
      sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  public _removeFile(index: number) {
    this.files.splice(index, 1);
  }

  public _removeAll() {
    this.files = [];
  }

  public _onUpload() {
    this.onUpload.emit(this.files);
  }


}
