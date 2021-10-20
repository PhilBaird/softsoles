import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilenavbarComponent } from './mobilenavbar.component';

describe('MobilenavbarComponent', () => {
  let component: MobilenavbarComponent;
  let fixture: ComponentFixture<MobilenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilenavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
