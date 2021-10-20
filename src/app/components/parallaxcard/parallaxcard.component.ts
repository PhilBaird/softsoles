import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parallaxcard',
  templateUrl: './parallaxcard.component.html',
  styleUrls: ['./parallaxcard.component.css']
})
export class ParallaxcardComponent implements OnInit {
  @Input() header = 'Caring';
  @Input() body = 'At Soft Soles Advanced and Diabetic Foot Care, we are both registered nurses (RNs) and registered practical nurses (RPN). We work in hospitals, clinics, communities, and facilities. Universally, what we see is situations where independence and health deteriorates or is lost due to lower limb disease. We have partnered with facilities and clinics to decrease this risk and hope to help you as well as your family maintain lower limb health.';
  @Input() imageLink = '../../../assets/original.png';
  @Input() buttonTitle: string;
  @Input() buttonLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}
