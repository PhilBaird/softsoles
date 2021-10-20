import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.css']
})
export class ProfilecardComponent implements OnInit {

  @Input() name = 'Michelle De Grandmont, RPN, Owner, Nurse Educator';
  @Input() body = 'Michelle De Grandmont is a bilingual registered nurse. She has taken advanced diabetic foot care nurse training. \n' +

    'Her work experience includes over 15 years of experience in gerontology, acute care medicine, diabetes, and holistic healing modalities. mic';
  @Input() imageLink = '../../../assets/nurses/michelle.png';
  @Input() color = '--second';

  constructor() { }

  ngOnInit(): void {
  }

}
