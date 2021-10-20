import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxcardComponent } from './parallaxcard.component';

describe('ParallaxcardComponent', () => {
  let component: ParallaxcardComponent;
  let fixture: ComponentFixture<ParallaxcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallaxcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
