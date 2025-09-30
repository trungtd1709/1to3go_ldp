import { Component } from '@angular/core';
import { ProductDisplayComponent } from '../../../../shared/components/product-display/product-display.component';
import { APP_IMAGES } from '../../../../shared/constant/app-images';

@Component({
  selector: 'app-pet-nursing-supplies',
  imports: [ProductDisplayComponent],
  templateUrl: './pet-nursing-supplies.component.html',
  styleUrl: './pet-nursing-supplies.component.scss',
})
export class PetNursingSuppliesComponent {
  APP_IMAGES = APP_IMAGES;
  productData = {
    title: "Pet Medicine Feeder Cat Pill Shooter Pet Piller Gun Dispenser Tool Pill Popper for Cats and Dogs (Blue)",
    rating: { score: 4.0, count: 17 },
    price: {
      current: 11.99,
      original: 11.99,
      pricePerUnit: "$11.99/count"
    },
    images: [
      {
        url: this.APP_IMAGES.PET_NURSING_SUPPLIES.SUPLLIES_1,
        alt: 'Product view 1',
      },
      {
        url: this.APP_IMAGES.PET_NURSING_SUPPLIES.SUPLLIES_2,
        alt: 'Product view 2',
      },
    ],
    seller: "Eltri",
    fulfillment: "Ships from Amazon",
    detailUrl: "https://www.amazon.com/1TO3GO-Pet-Pill-Shooter-Blue/dp/B0DJ9KVNL2?ref_=ast_sto_dp&th=1",
    features: [
      {
        title: "2 IN 1",
        description:
          "Set pill popper for cats includes 2 tools for pets to give pills and liquid medicine. In addition, the syringe with nipple can help rescue sick or newborn pets in unexpected situations."
      },
      {
        title: "SPECIAL FEATURES",
        description:
          "The large push head of dog pill shooter fits comfortably in your hand so you can hold it firmly, save effort, and use one hand to press the button of pill gun."
      },
      {
        title: "SPECIAL GIFT",
        description:
          "Used pet pill shooter for both dogs and cats, especially pets that are difficult to give medication or have no effect on pill pockets or pill wrap treats methods. Reduce stress for you and your pet when giving medication."
      },
      {
        title: "USAGE TIPS",
        description:
          "Pets that have difficulty give medication, wrap the pet in a towel while using the pill dispenser. Stroke the cat's neck to induce a swallowing response after giving the medicine in the pet's mouth."
      },
      {
        title: "WARRANTY",
        description:
          "If anything ever happens, we'll replace the pet medicine feeder for cats for free. Simply contact us and we are always happy to address any of your concerns!"
      }
    ]
  };
}
