import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarchildComponent } from './starchild.component';

describe('StarchildComponent', () => {
  let component: StarchildComponent;
  let fixture: ComponentFixture<StarchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
