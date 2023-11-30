import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewbookComponent } from './addnewbook.component';

describe('AddnewbookComponent', () => {
  let component: AddnewbookComponent;
  let fixture: ComponentFixture<AddnewbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewbookComponent]
    });
    fixture = TestBed.createComponent(AddnewbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
