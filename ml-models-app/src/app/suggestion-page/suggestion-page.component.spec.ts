import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionPageComponent } from './suggestion-page.component';

describe('SuggestionPageComponent', () => {
  let component: SuggestionPageComponent;
  let fixture: ComponentFixture<SuggestionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestionPageComponent]
    });
    fixture = TestBed.createComponent(SuggestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
