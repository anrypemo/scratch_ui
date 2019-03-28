import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ScrollUtil} from "../../utilities/ScrollUtil";

@Component({
  selector: 'ui-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.less']
})
export class UiOverlayComponent implements OnInit {

  @Input()
  public loading: boolean = false;

  @Input()
  public zIndex: number = 1000;

  @Input()
  public innerTemplate: TemplateRef<any>;

  private _visible: boolean;

  @Input()
  public set visible(visible: boolean) {
    this._visible = visible;
    if (visible) {
      ScrollUtil.disableScroll();
    } else {
      ScrollUtil.enableScroll();
    }
  }

  public get visible(): boolean {
    return this._visible;
  }


  constructor() {
  }

  ngOnInit() {
  }

}
