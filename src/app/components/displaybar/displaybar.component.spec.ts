import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybarComponent } from './displaybar.component';

describe('DisplaybarComponent', () => {
  let component: DisplaybarComponent;
  let fixture: ComponentFixture<DisplaybarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaybarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
