import {Component, Input, OnInit} from '@angular/core';
import {MainService} from '../../../main.service';

@Component({
  selector: 'app-bulletcard',
  templateUrl: './bulletcard.component.html',
  styleUrls: ['./bulletcard.component.css']
})
export class BulletcardComponent implements OnInit {

  @Input() header = 'Caring';
  @Input() firstbody = 'Caring for families one step at a time.';
  @Input() secondbody = 'Caring for families one step at a time.';
  @Input() bullets = ['Caring for families one step at a time.',
    'Caring for families one step at a time.',
    'Caring for families one step at a time.',
    'Caring for families one step at a time.'];
  @Input() columns = 2;
  @Input() buttonTitle: string;
  @Input() buttonLink: string;
  @Input() color = '--second';
  @Input() white = false;
  private s: MainService;

  constructor(s: MainService) {
    this.s = s;
  }

  ngOnInit(): void {
    if (this.s.isMobile()){
      this.columns = 1;
    }
  }

}
