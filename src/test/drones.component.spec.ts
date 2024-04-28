import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronesComponent } from '@application/drones/drones.component';

describe('DronesComponent', () => {
  let component: DronesComponent;
  let fixture: ComponentFixture<DronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DronesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
