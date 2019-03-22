import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'scratch-error-label',
  templateUrl: './error.label.component.html',
  styleUrls: ['./error.label.component.less']
})
export class UiErrorLabelComponent {

  @Input()
  public text: string = "";

  @Output()
  public onClose = new EventEmitter();

  constructor() {

  }

  onCloseClick() {
    this.onClose.emit();
  }
}
