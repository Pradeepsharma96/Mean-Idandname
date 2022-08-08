import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoard.Component } from './display-board.component';

describe('DisplayBoard.Component', () => {
  let component: DisplayBoard.Component;
  let fixture: ComponentFixture<DisplayBoard.Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBoard.Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayBoard.Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
