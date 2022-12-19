import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicsRoutingComponent } from './dynamics-routing.component';

describe('DynamicsRoutingComponent', () => {
  let component: DynamicsRoutingComponent;
  let fixture: ComponentFixture<DynamicsRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicsRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
