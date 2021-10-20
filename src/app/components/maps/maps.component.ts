import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  @Input() header = 'Kanata Mews Clinic';
  @Input() body = '329 March Road, Kanata';
  @Input() buttonTitle: string;
  @Input() buttonLink: string;
  @Input() color = '--second';
  @Input() buttonExt = false;

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    if(this.buttonExt){
      window.open(this.buttonLink);
    }
  }

}
