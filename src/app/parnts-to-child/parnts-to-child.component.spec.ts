import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParntsToChildComponent } from './parnts-to-child.component';

describe('ParntsToChildComponent', () => {
  let component: ParntsToChildComponent;
  let fixture: ComponentFixture<ParntsToChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParntsToChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParntsToChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
