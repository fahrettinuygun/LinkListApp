import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLinkScreenComponent } from './add-link-screen.component';

describe('AddLinkScreenComponent', () => {
  let component: AddLinkScreenComponent;
  let fixture: ComponentFixture<AddLinkScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLinkScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLinkScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
