import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

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

  @Input()
  public allowedExtensions: string[] = ["png", "jpg", "jpeg"];

  public validFiles: File[] = [];

  public invalidFiles: File[] = [];

  public invalidFileTypeErrorMessage: string = "Such files has invalid file type, allowed types are: " + this.allowedExtensions.join(", ");

  public isShowErrorPopup: boolean = false;

  public isUploading: boolean = false;


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
      if (this.isFileExtensionValid(files[i])) {
        this.validFiles.push(files[i]);
      } else {
        this.invalidFiles.push(files[i]);
      }
    }
    if (this.invalidFiles.length > 0) {
      this.isShowErrorPopup = true;
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
    this.validFiles.splice(index, 1);
  }

  public _removeAll() {
    this.validFiles = [];
  }

  public _onUpload() {
    this.onUpload.emit(this.validFiles);
    this.isUploading = true;
  }

  private getFileExtension(file: File): string {
    return file.name.split(".").pop();
  }

  private isFileExtensionValid(file: File) {
    let type = this.getFileExtension(file);
    let isValid = false;
    this.allowedExtensions.forEach(extension => {
      if (type.toLowerCase().indexOf(extension.toLowerCase()) >= 0) {
        isValid = true;
      }
    });
    return isValid;
  }

  public errorPopupClosed() {
    this.isShowErrorPopup = false;
    this.invalidFiles = [];
  }
}
