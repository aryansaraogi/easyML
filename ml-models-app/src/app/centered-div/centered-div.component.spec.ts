import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenteredDivComponent } from './centered-div.component';

describe('CenteredDivComponent', () => {
  let component: CenteredDivComponent;
  let fixture: ComponentFixture<CenteredDivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenteredDivComponent]
    });
    fixture = TestBed.createComponent(CenteredDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
