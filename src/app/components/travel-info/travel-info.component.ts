import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'scratch-travel-info',
  templateUrl: './travel-info.component.html',
  styleUrls: ['./travel-info.component.less']
})
export class TravelInfoComponent implements OnInit {

  private countriesUrl = "./assets/countries_id_list.json";
  public dummyData: any;
  public dataTemp = new Map();
  public countries: any[] = [];
  public mapUrl="assets/black_world_map.svg";


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
   this.createCountriesList();
  }

  public getJSON(): Observable<any[]> {
    return this.http.get<any[]>(this.countriesUrl);
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
}
