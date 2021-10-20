import { Component, OnInit } from '@angular/core';
import {MainService} from '../../../main.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locations: any = [
    {
      title: 'Kanata Mews Clinic',
      address: '329 March Road, Kanata'
    },
    {
      title: 'Rideau Family Health',
      address: '3625 Rivergate Way, Unit 5 Ottawa'
    },
    {
      title: 'Constance Bay Community Center',
      address: '262 Len Purcell Drive Woodlawn'
    },
    {
      title: 'Kanata Mews Clinic',
      address: '329 March Road, Kanata'
    },
    {
      title: 'Rideau Family Health',
      address: '3625 Rivergate Way, Unit 5 Ottawa'
    },
    {
      title: 'Constance Bay Community Center',
      address: '262 Len Purcell Drive Woodlawn'
    },
    {
      title: 'Kanata Mews Clinic',
      address: '329 March Road, Kanata'
    },
    {
      title: 'Kanata Mews Clinic',
      address: '329 March Road, Kanata'
    },
    ];
  cards: any = [
    {
      header: 'Find a Foot Care Clinic Near You',
      body: 'Soft Soles Advanced and Diabetic Foot Care provides care in the comfort of your home. We can also see patients at hospitals, long-term care facilities, residential facilities, senior centres, and safe houses from Orleans to Perth to Renfrew! ' +
        '\n \nHere are some locations that depend on Soft Soles for their foot care services:'
    }
  ];
  leftover: any = [];
  public s: MainService;
  constructor(s: MainService) {
    this.s = s;
  }

  ngOnInit(): void {
    if (this.s.isMobile()){
     this.leftover = this.locations;
     this.locations = [];
    }
    else if (this.locations.length % 3 !== 0){
      if ((this.locations.length - 1) % 3 === 0){
        this.leftover.push(this.locations.pop());
      }
      if ((this.locations.length - 2) % 3 === 0) {
        this.leftover.push(this.locations.pop());
        this.leftover.push(this.locations.pop());
      }
    }
  }

  toGoogle(address: string): string {
    return 'https://www.google.com/maps/place/' + address.replace(' ', '+');
  }


}
