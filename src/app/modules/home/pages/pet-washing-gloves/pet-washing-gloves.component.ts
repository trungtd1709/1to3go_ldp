import { Component } from '@angular/core';
import { APP_IMAGES } from '../../../../shared/constant/app-images';
import { ProductDisplayComponent } from '../../../../shared/components/product-display/product-display.component';

@Component({
  selector: 'app-pet-washing-gloves',
  imports: [ProductDisplayComponent],
  templateUrl: './pet-washing-gloves.component.html',
  styleUrl: './pet-washing-gloves.component.scss',
})
export class PetWashingGlovesComponent {
  APP_IMAGES = APP_IMAGES;
  productData = {
    title: "1TO3GO Pet Grooming Gloves Pet Hair Remover Cat, Dog Washing Gloves Silicone Heat Resistant Cleaning Gloves with High-Density Teeth...",
    rating: { score: 4.3, count: 322 },
    images: [
      { url: this.APP_IMAGES.PET_WASHING_GLOVES.GLOVES_1, alt: 'Product view 1' },
      { url: this.APP_IMAGES.PET_WASHING_GLOVES.GLOVES_2, alt: 'Product view 2' },
      { url: this.APP_IMAGES.PET_WASHING_GLOVES.GLOVES_3, alt: 'Product view 3' },
      { url: this.APP_IMAGES.PET_WASHING_GLOVES.GLOVES_4, alt: 'Product view 4' },
    ],
    price: {
      current: 12.99,
      original: 12.99,
      pricePerUnit: "$12.99/count"
    },
    seller: "Eltri",
    fulfillment: "Fulfilled by Amazon",
    detailUrl: "https://www.amazon.com/1TO3GO-Grooming-Silicone-Resistant-High-Density/dp/B0C2ZBSM12?ref_=ast_sto_dp&th=1",
    features: [
      {
        title: "UPGRADED DESIGN",
        description:
          "Dog washing gloves are designed with a longer than ordinary one and added elastic to help ensure 100% don't slip out of hands. Especially useful when you have scratches and don't want water or soap to get inside. Longer and thicker design of grooming gloves for dogs protects hands from accidental scratches when bathing your pet."
      },
      {
        title: "RELAXING TIME",
        description:
          "Cat grooming gloves are a combination of gloves and a brush with soft bristles, so very easy to foam. You can also use it to stroke, massage and removing lost hairs. A great way to show interest. With more than 3000 soft brush heads designed to increase contact and friction, your pet is both deeply cleaned but still feels very comfortable."
      },
      {
        title: "SAFE & RELIABLE",
        description:
          "Cat gloves for grooming are made of high-quality silicone material, durable, non-toxic to ensure safety for you and your pets and reusable. Beside pet gloves grooming for cats is heat resistant up to 450 degrees F, especially the hand part can be disinfected with hot water."
      },
      {
        title: "MULTI-PURPOSE",
        description:
          "Not only used to bathe and massage all kinds of pets such as cats, dogs and rabbits, horses... Dog grooming gloves can also be used to wash dishes, fruits, furniture, cars and other items or even taking hot items."
      },
      {
        title: "LIFETIME WARRANTY",
        description:
          "If anything ever happens, we'll replace the pet washing glove for free. Simply contact us and we are always happy to address any of your concerns!"
      }
    ]
  };
}
