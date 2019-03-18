import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  host: {"[class.ui-button]": "true"},
})
export class UiButtonComponent {

  @Input()
  public text: string = "";

  @Input()
  public disabled: boolean = false;

  @Input()
  public type: string = "primary";

  @Output()
  public onClick = new EventEmitter<boolean>();

  public _onClick(event) {
    this.onClick.emit(true);
  }
}
