import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSubmitComponent } from './quiz-submit.component';

describe('QuizSubmitComponent', () => {
  let component: QuizSubmitComponent;
  let fixture: ComponentFixture<QuizSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
