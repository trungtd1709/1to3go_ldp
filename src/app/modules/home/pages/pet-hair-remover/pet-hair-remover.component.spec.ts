import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetHairRemoverComponent } from './pet-hair-remover.component';

describe('PetHairRemoverComponent', () => {
  let component: PetHairRemoverComponent;
  let fixture: ComponentFixture<PetHairRemoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetHairRemoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetHairRemoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
