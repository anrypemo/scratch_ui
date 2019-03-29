import {Directive, EventEmitter, HostListener, Output} from "@angular/core";

@Directive({
  selector: '[dropFiles]'
})
export class DropFilesDirective {
  @Output()
  private filesChangeEmiter: EventEmitter<FileList> = new EventEmitter();

  @HostListener('drop', ['$event'])
  public onDrop(evt) {
    console.log(evt);
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.filesChangeEmiter.emit(evt);
    }
  }
}
