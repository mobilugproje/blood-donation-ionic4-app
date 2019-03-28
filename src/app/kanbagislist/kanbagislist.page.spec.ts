import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbagislistPage } from './kanbagislist.page';

describe('KanbagislistPage', () => {
  let component: KanbagislistPage;
  let fixture: ComponentFixture<KanbagislistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbagislistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbagislistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
