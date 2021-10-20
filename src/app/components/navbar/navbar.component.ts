import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  navItems = navItems;

  ngOnInit(): void {
  }

}

export const navItems = [
  {
    title: 'Home',
    link: '/home'
  },
  {
    title: 'About',
    link: '/about'
  },
  {
    title: 'COVID-19',
    link: '/covid19'
  },
  {
    title: 'Services',
    link: '/services'
  },
  {
    title: 'Instruments',
    link: '/instruments'
  },
  {
    title: 'Location',
    link: '/location'
  },
  {
    title: 'Education',
    link: '/education'
  },
  // {
  //   title: 'Contact',
  //   link: '/contact'
  // },
];
