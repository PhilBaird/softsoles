import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-displaybar',
  templateUrl: './displaybar.component.html',
  styleUrls: ['./displaybar.component.css']
})
export class DisplaybarComponent implements OnInit {
  @Input() text = 'Caring for families one step at a time.';
  @Input() imageLink = '../../../assets/original.png';
  @Input() buttonTitle: string;
  @Input() buttonLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}
