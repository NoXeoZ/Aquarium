import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieFormComponent } from './specie-form.component';

describe('SpecieFormComponent', () => {
  let component: SpecieFormComponent;
  let fixture: ComponentFixture<SpecieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
