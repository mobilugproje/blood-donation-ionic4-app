import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubePage } from './sube.page';

describe('SubePage', () => {
  let component: SubePage;
  let fixture: ComponentFixture<SubePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
