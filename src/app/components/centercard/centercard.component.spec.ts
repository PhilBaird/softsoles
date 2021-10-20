import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentercardComponent } from './centercard.component';

describe('CentercardComponent', () => {
  let component: CentercardComponent;
  let fixture: ComponentFixture<CentercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
