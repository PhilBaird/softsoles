import {Component, Input, OnInit} from '@angular/core';
import {MainService} from '../../../main.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // @Input() header = 'Caring';
  // @Input() body = 'At Soft Soles Advanced and Diabetic Foot Care, we are both registered nurses (RNs) and registered practical nurses (RPN). We work in hospitals, clinics, communities, and facilities. Universally, what we see is situations where independence and health deteriorates or is lost due to lower limb disease. We have partnered with facilities and clinics to decrease this risk and hope to help you as well as your family maintain lower limb health.';
  // @Input() imageLink = '../../../assets/original.png';
  // @Input() buttonTitle: string;
  // @Input() buttonLink: string;
  // @Input() color = '--second';
  @Input() card: Card = {};
  public s: MainService;
  constructor(s: MainService) {
    this.s = s;
  }

  ngOnInit(): void {

  }

}

export class Card {
  title ?: string;
  body ?: string;
  imageLink ? = '../../../assets/original.png';
  buttonTitle?: string;
  buttonLink?: string;
  buttonExt?: boolean;
  color ? = '--second';
  white?: boolean;
}
