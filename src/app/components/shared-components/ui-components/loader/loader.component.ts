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

  constructor() { }

  ngOnInit() {
  }

}
