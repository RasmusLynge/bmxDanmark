import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Video2020Component } from './video2020.component';

describe('Video2020Component', () => {
  let component: Video2020Component;
  let fixture: ComponentFixture<Video2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Video2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Video2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
