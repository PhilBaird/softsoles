import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public mobile = false;

  constructor() {
    this.isMobile();
  }
  isMobile(): boolean {
    // console.log(screen.availWidth , screen.availHeight, screen.availWidth / screen.availHeight)
    // if (screen.availWidth / screen.availHeight < 1) {
    //
    // }
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) {
      this.mobile = true;
    }
    return this.mobile;
  }
}
