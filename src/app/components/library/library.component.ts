import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scratch-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less']
})
export class LibraryComponent implements OnInit {

  public isAttachmentPopupVisible: boolean = false;
  public mapUrl="assets/black_world_map.svg";


  constructor() { }

  ngOnInit() {
  }

  public showAttachmentPopup() {
    this.isAttachmentPopupVisible = true;
  }

  public _uploadFiles(files: File[]){

  }

}
