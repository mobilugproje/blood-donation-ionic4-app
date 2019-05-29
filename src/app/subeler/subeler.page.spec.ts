import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubelerPage } from './subeler.page';

describe('SubelerPage', () => {
  let component: SubelerPage;
  let fixture: ComponentFixture<SubelerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubelerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubelerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
