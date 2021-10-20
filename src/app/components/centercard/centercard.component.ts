import {Component, Input, OnInit} from '@angular/core';
import {MainService} from '../../../main.service';

@Component({
  selector: 'app-centercard',
  templateUrl: './centercard.component.html',
  styleUrls: ['./centercard.component.css']
})
export class CentercardComponent implements OnInit {

  @Input() header = 'Caring';
  @Input() body = 'At Soft Soles Advanced and Diabetic Foot Care, we are both registered nurses (RNs) and registered practical nurses (RPN). We work in hospitals, clinics, communities, and facilities. Universally, what we see is situations where independence and health deteriorates or is lost due to lower limb disease. We have partnered with facilities and clinics to decrease this risk and hope to help you as well as your family maintain lower limb health.';
  @Input() buttonTitle: string;
  @Input() buttonLink: string;
  @Input() buttonExt = false;
  @Input() color = '--second';
  @Input() white = false;


  constructor() {
  }

  ngOnInit(): void {
  }

  click() {
    if(this.buttonExt){
      window.open(this.buttonLink);
    }
  }
}
