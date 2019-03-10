import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KayitPage } from './kayit.page';

describe('KayitPage', () => {
  let component: KayitPage;
  let fixture: ComponentFixture<KayitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
