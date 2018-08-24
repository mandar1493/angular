import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoToWordsPipeComponent } from './no-to-words-pipe.component';

describe('NoToWordsPipeComponent', () => {
  let component: NoToWordsPipeComponent;
  let fixture: ComponentFixture<NoToWordsPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoToWordsPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoToWordsPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
