import { Component, OnInit } from '@angular/core';
import {Card} from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cards: any = [
    {
      title: '',
      buttonTitle: '',
      body: '',
    },
  ];

  bullets = [{
    title: '',
    buttonTitle: '',
    firstbody: '',
    secondbody: '',
    bullets: [
      '',
    ],
  }];

  onecards: Card[]  = [
    {
      title: 'Our Mission',
      buttonTitle: 'Explore Services',
      body: 'The sole mission of our institution is to provide quality comprehensive foot care to individuals across Ontario. We also strive to help aspiring foot care nurses start their career through education, support, and mentoring.'
    },
  ];
  twocards: Card[] = [
    {
      // title: 'Register for Online Foot Care Theory Courses available Canada Wide',
      buttonTitle: 'Book Now',
      imageLink: '../../../assets/toes.png',
      body: 'The idea of empowering people is foundational to nursing. It\'s a thought process and skill set that goes beyond the information available and the science of nursing, to the art of healing.\n' +
        '\n' +
        'Meet a Soft Soles nurse, share some laughter, gain some information, and invest in your health.\n'
    },
  ];

  ngOnInit(): void {
    this.onecards.forEach( (card , i ) => {
      card.color = i % 2 === 0 ?  '--fourth' : '--fifth';
    });
    this.twocards.forEach( (card , i ) => {
      card.color = i % 2 === 0 ?  '--fifth' : '--fourth';
    });
  }

}
