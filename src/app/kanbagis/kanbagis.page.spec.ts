import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbagisPage } from './kanbagis.page';

describe('KanbagisPage', () => {
  let component: KanbagisPage;
  let fixture: ComponentFixture<KanbagisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbagisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbagisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
