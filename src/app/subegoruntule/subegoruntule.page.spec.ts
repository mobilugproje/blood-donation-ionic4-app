import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubegoruntulePage } from './subegoruntule.page';

describe('SubegoruntulePage', () => {
  let component: SubegoruntulePage;
  let fixture: ComponentFixture<SubegoruntulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubegoruntulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubegoruntulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
