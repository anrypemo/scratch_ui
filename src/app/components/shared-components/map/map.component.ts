import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../../model/country";

const WIDTH_HEIGHT_PARAMETER = 1.53;

@Component({
  selector: 'scratch-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  @Input()
  public countries: Country[] = [];
  @Input()
  public mapUrl;
  @Input()
  public dummyData: any;

  public hoverRegion: any;
  public width;
  public height;


  constructor() {
  }


  ngOnInit() {
    this.setMapSize();
  }


  private setMapSize() {
    this.height = window.innerHeight - 60;
    this.width = window.innerWidth;
  }


  changeHoverRegion(region) {
    this.hoverRegion = region;
  }

  mouseEnterElement(elem) {
    if ('' === elem.target.id) {
      return;
    }
    const elementById = document.getElementById(elem.target.id);
    console.log(elementById);
    if (elementById.classList.contains("_visited")) {
      elementById.classList.remove("_visited");
    } else {
      elementById.classList.add("_visited");
    }
  }

  mouseLeaveElement(elem) {
    if ('' === elem.target.id) {
      return;
    }
    const elementById = document.getElementById(elem.target.id);
    console.log(elementById);
    elementById.style.fill = 'black';
  }


}
