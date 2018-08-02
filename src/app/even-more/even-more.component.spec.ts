import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenMoreComponent } from './even-more.component';

describe('EvenMoreComponent', () => {
  let component: EvenMoreComponent;
  let fixture: ComponentFixture<EvenMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
