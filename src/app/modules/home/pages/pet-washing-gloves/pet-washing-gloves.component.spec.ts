import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetWashingGlovesComponent } from './pet-washing-gloves.component';

describe('PetWashingGlovesComponent', () => {
  let component: PetWashingGlovesComponent;
  let fixture: ComponentFixture<PetWashingGlovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetWashingGlovesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetWashingGlovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
