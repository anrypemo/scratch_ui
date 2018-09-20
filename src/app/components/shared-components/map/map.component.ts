import {Component, ElementRef, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'scratch-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  public dummyData: any;
  public dataTemp = new Map();
  public hoverRegion: any;
  public countries = [];
  private countriesUrl = "./assets/countries_id_list.json";

  constructor(private el: ElementRef, private http: HttpClient) {
  }

  public getJSON(): Observable<any> {
    return this.http.get(this.countriesUrl)
  }


  ngOnInit() {
    this.createCountriesList();
  }

  createDummyData() {
    this.countries.forEach(country => {
      this.dataTemp.set(country, Math.random());
    });
    this.dummyData = this.dataTemp;
  }

  createCountriesList() {
    this.getJSON().subscribe(data => {
      this.countries = data;
      this.createDummyData();
    });
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
    elementById.style.fill = 'green';
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
