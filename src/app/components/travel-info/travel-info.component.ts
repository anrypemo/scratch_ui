import {Component, OnInit} from "@angular/core";
import {HttpService} from "../../services/http.service";
import {Country} from "../../model/country";

@Component({
  selector: 'scratch-travel-info',
  templateUrl: './travel-info.component.html',
  styleUrls: ['./travel-info.component.less']
})
export class TravelInfoComponent implements OnInit {

  private countriesUrl = "./assets/countries_id_list.json";
  public dummyData: any;
  public dataTemp = new Map();
  public countries: Country[] = [];
  public mapUrl = "assets/black_world_map.svg";


  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.get("/country").subscribe(data => {
      this.countries = data;
    })
  }


}
