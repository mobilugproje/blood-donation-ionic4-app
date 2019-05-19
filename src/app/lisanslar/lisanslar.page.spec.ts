import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisanslarPage } from './lisanslar.page';

describe('LisanslarPage', () => {
  let component: LisanslarPage;
  let fixture: ComponentFixture<LisanslarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisanslarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisanslarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
