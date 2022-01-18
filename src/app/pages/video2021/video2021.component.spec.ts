import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Video2021Component } from './video2021.component';

describe('Video2021Component', () => {
  let component: Video2021Component;
  let fixture: ComponentFixture<Video2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Video2021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Video2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
