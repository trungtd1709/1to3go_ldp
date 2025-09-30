import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetNursingSuppliesComponent } from './pet-nursing-supplies.component';

describe('PetNursingSuppliesComponent', () => {
  let component: PetNursingSuppliesComponent;
  let fixture: ComponentFixture<PetNursingSuppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetNursingSuppliesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetNursingSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
