import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogNewComponent } from './dog-new.component';

describe('DogNewComponent', () => {
  let component: DogNewComponent;
  let fixture: ComponentFixture<DogNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
