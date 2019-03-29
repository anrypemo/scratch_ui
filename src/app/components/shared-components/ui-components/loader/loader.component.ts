import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class UiLoaderComponent implements OnInit {

  @Input()
  public size: number = 40;

  @Input()
  public visible: boolean = false;

  @Input()
  public type: string = "rose";

  public loaderImageUrl="";

  constructor() { }

  ngOnInit() {
    switch(this.type){
      case "rose": {
        this.loaderImageUrl = "/assets/images/loading-rose.png";
        break;
      }
      case "plane": {
        this.loaderImageUrl = "/assets/images/loading-plane.png";
        break;
      }
    }
  }

}
