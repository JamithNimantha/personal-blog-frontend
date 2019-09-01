import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAPostComponent } from './create-a-post.component';

describe('CreateAPostComponent', () => {
  let component: CreateAPostComponent;
  let fixture: ComponentFixture<CreateAPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
