import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

}