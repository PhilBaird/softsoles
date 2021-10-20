import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-mobilenavbar',
  templateUrl: './mobilenavbar.component.html',
  styleUrls: ['./mobilenavbar.component.css']
})
export class MobilenavbarComponent implements OnInit {
  @Output() click = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
