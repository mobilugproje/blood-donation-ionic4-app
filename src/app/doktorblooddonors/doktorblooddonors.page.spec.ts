import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoktorblooddonorsPage } from './doktorblooddonors.page';

describe('DoktorblooddonorsPage', () => {
  let component: DoktorblooddonorsPage;
  let fixture: ComponentFixture<DoktorblooddonorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoktorblooddonorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoktorblooddonorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
