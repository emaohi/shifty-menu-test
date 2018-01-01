import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizRoleCreatorComponent } from './quiz-role-creator.component';

describe('QuizRoleCreatorComponent', () => {
  let component: QuizRoleCreatorComponent;
  let fixture: ComponentFixture<QuizRoleCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizRoleCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizRoleCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
