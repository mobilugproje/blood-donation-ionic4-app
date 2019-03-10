import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirisPage } from './giris.page';

describe('GirisPage', () => {
  let component: GirisPage;
  let fixture: ComponentFixture<GirisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
