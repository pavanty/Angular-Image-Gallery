import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayoneimageComponent } from './displayoneimage.component';

describe('DisplayoneimageComponent', () => {
  let component: DisplayoneimageComponent;
  let fixture: ComponentFixture<DisplayoneimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayoneimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayoneimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
