import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User.ComponentsComponent } from './user.components.component';

describe('User.ComponentsComponent', () => {
  let component: User.ComponentsComponent;
  let fixture: ComponentFixture<User.ComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ User.ComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(User.ComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
