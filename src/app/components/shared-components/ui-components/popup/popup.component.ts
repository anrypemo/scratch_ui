import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'ui-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.less']
})
export class UiPopupComponent implements OnInit {

  @Input()
  public template: TemplateRef<any>;

  @Input()
  public visible: boolean = false;

  @Output()
  public onClose = new EventEmitter();

  @Input()
  public caption: string = "";

  constructor() {
  }

  ngOnInit() {
  }

  public _onClose() {
    this.visible = false;
    this.onClose.emit();
  }

}
