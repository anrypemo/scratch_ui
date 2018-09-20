import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'scratch-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  public dummyData: any;
  public dataTemp = new Map();
  public hoverRegion: any;
  public countries = ['kalimantan', 'papua new guinea', 'mexico', 'estonia', 'algeria', 'morocco', 'mauretania',
    'senegal', 'gambia', 'casamance', 'bissau', 'guinee', 'sierra leone', 'liberia', 'ivoire', 'mali', 'burkina',
    'niger', 'ghana', 'togo', 'benin', 'nigeria', 'tunisia', 'libya', 'egypt', 'chad', 'south_sudan', 'sudan',
    'cameroon', 'eritrea', 'djibouti', 'ethiopia', 'somaliland', 'soqotra', 'somalia', 'centrafrique',
    'sao tome', 'principe', 'bioko', 'gabon', 'equatorial guinea', 'congo', 'cabinda', 'drc', 'rwanda', 'burundi',
    'uganda', 'kenya', 'tanzania', 'zambia', 'angola', 'malawi', 'mozambique', 'zimbabwe', 'namibia', 'botswana',
    'swaziland', 'lesotho', 'south africa', 'greenland', 'disko', 'milne', 'east antarctica', 'antarctic peninsula',
    'thurston', 'alexander', 'smyley', 'robert', 'king george', 'james ross', 'elephant', 'australia', 'tasmania',
    'new zealand north island', 'new zealand south island', 'new caledonia', 'sumatra', 'east malaysia', 'brunei',
    'sulawesi', 'maluku', 'seram', 'java', 'bali', 'lombok', 'sumba', 'flores', 'timor', 'new ireland', 'new britain',
    'bougainville', 'choiseul', 'new georgia', 'santa isabel', 'malaita', 'santa ana', 'rennell', 'espiritu santo',
    'malakula', 'efate', 'fiji', 'palawan', 'negros', 'cebu', 'samar', 'path7462', 'luzon', 'mindoro', 'hainan',
    'taiwan', 'kyushu', 'shikoku', 'honshu', 'hokkaido', 'iturup', 'urup', 'paramushir', 'onekotan', 'sakhalin',
    'bering island', 'medny', 'attu', 'amchitka', 'adak', 'umnak', 'unalaska', 'st. lawrence island',
    'st. lawrence island west', 'alaska', 'chukotka', 'wrangel-w', 'unalaska west', 'umnak west', 'another aleutian west',
    'adak west', 'amchitka west', 'attu west', 'kerguelen', 'mauritius', 'reunion', 'madagascar', 'grande comore',
    'mayotte', 'aldabra', 'praslin', 'mahe', 'male', 'maldive', 'gan', 'path151', 'terceira', 'pico', 'sao miguel',
    'madeira', 'lanzarote', 'gran canaria', 'tenerife', 'santo antao', 'boa vista', 'santiago', 'kauai', 'oahu', 'kahului',
    'hawaii', 'raiatea', 'tahiti', 'guadeloupe', 'dominica', 'martinique', 'st. lucia', 'st. vincent', 'grenada',
    'trinidad', 'puerto rico', 'haiti-dominican border', 'domincan republic', 'haiti', 'falklands west', 'falklands east',
    'iceland', 'spitsbergen', 'nordaustlandet', 'edgeoya', 'prince george', 'salisbury', 'wilczek', 'bell',
    'novaya zemlya north', 'novaya zemlya south', 'komsomolets', 'october', 'bolshevik', 'kotelny', 'novaya sibir',
    'lyakhovsky', 'wrangel', 'sri lanka', 'cuba', 'bimini', 'andros', 'inagua', 'eleuthera', 'grand bahama', 'jamaica',
    'irian jaya', 'alaska-westcopy', 'galapagos', 'banks', 'prince patrick', 'eglinton', 'mackenzie king', 'king christian',
    'ellef ringnes', 'amund ringnes', 'axel heiberg', 'victoria', 'prince of wales', 'prescott', 'cornwallis', 'bathurst',
    'devon', 'baffin', 'bylot', 'ellesmere', 'southhampton', 'newfoundland', 'canada', 'usa', 'haida gwaii', 'vancouver',
    'guatemala', 'honduras', 'el salvador', 'nicaragua', 'costa rica', 'panama', 'colombia', 'venezuela', 'guyana',
    'suriname', 'guyane', 'ecuador', 'peru', 'bolivia', 'paraguay', 'uruguay', 'argentina', 'tierra del fuego chile',
    'tierra del fuego argentina', 'chile', 'chiloe', 'brazil', 'belize', 'russia', 'china', 'mongolia', 'north korea',
    'south korea', 'kazakhstan', 'turkmenistan', 'uzbekistan', 'tajikistan', 'kirgizstan', 'afghanistan', 'pakistan',
    'india', 'nepal', 'bhutan', 'bangladesh', 'burma', 'thailand', 'malaysia', 'cambodia', 'laos', 'vietnam',
    'georgia', 'armenia', 'azerbaijan', 'iran', 'turkey', 'yemen', 'oman', 'emirates', 'qatar', 'kuwait', 'saudi',
    'syria', 'iraq', 'jordan', 'lebanon', 'israel', 'cyprus', 'norway', 'britain', 'ulster', 'ireland', 'sweden', 'finland',
    'path302', 'hiumaa', 'saaremaa', 'lithuania', 'belarus', 'poland', 'spain', 'portugal', 'majorca', 'sardinia',
    'corsica', 'france', 'netherlands', 'belgium', 'germany', 'denmark', 'sjælland', 'gotland', 'switzerland', 'czech',
    'slovakia', 'austria', 'hungary', 'slovenia', 'croatia', 'bosnia', 'italy', 'sicily', 'malta', 'ukraine', 'moldova',
    'romania', 'montenegro', 'serbia', 'desc7821', 'bulgaria', 'albania', 'macedonia', 'greece', 'thrace', 'crete'];

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.createDummyData();
  }

  createDummyData() {
    this.countries.forEach(country => {
      this.dataTemp.set(country, Math.random());
    });
    this.dummyData = this.dataTemp;
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
