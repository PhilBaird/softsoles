import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletcardComponent } from './bulletcard.component';

describe('BulletcardComponent', () => {
  let component: BulletcardComponent;
  let fixture: ComponentFixture<BulletcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulletcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
