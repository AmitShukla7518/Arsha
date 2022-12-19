import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChileToParantsComponent } from './chile-to-parants.component';

describe('ChileToParantsComponent', () => {
  let component: ChileToParantsComponent;
  let fixture: ComponentFixture<ChileToParantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChileToParantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChileToParantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
