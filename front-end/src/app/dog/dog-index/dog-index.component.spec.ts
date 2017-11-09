import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogIndexComponent } from './dog-index.component';

describe('DogIndexComponent', () => {
  let component: DogIndexComponent;
  let fixture: ComponentFixture<DogIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
