import {Component, OnInit} from '@angular/core';
import {navItems} from './components/navbar/navbar.component';
import {MainService} from '../main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'softsoles';
  mobile = false;
  navItems = navItems;
  s: MainService;

  constructor(s: MainService) {
    this.s = s;
    if (s.isMobile()){
      document.documentElement.style.setProperty('font-size', 'small');
    }
  }



  ngOnInit(): void {
    // TODO add mobile pages.
  }

}
