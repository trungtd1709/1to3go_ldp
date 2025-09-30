import { Component } from '@angular/core';
import { APP_IMAGES } from '../../../../shared/constant/app-images';
import { ProductDisplayComponent } from '../../../../shared/components/product-display/product-display.component';

@Component({
  selector: 'app-pet-hair-remover',
  imports: [ProductDisplayComponent],
  templateUrl: './pet-hair-remover.component.html',
  styleUrl: './pet-hair-remover.component.scss',
})
export class PetHairRemoverComponent {
  APP_IMAGES = APP_IMAGES;
  productData = {
    title: "1TO3GO Pet Hair Remover Roller Compact Cat/Dog Hair Remover Deep Clean Convenient to Carry Reusable Lint Roller for Carpet, Furniture,...",
    rating: { score: 4.4, count: 53 },
    images: [
      {
        url: this.APP_IMAGES.PET_HAIR_REMOVER.HAIR_REMOVER_1,
        alt: 'Product view 1',
      },
      {
        url: this.APP_IMAGES.PET_HAIR_REMOVER.HAIR_REMOVER_2,
        alt: 'Product view 2',
      },
      {
        url: this.APP_IMAGES.PET_HAIR_REMOVER.HAIR_REMOVER_3,
        alt: 'Product view 3',
      },
    ],
    price: {
      current: 9.99,
      original: 12.99,
      pricePerUnit: "$9.99/count"
    },
    seller: "Eltri",
    fulfillment: "Fulfilled by Amazon",
    detailUrl: "https://www.amazon.com/1TO3GO-Convenient-Reusable-Furniture-Clothing/dp/B0CM6WTJ21?ref_=ast_sto_dp",
    features: [
      {
        title: "GREAT PERFORMANCE",
        description:
          "Pet hair remover helps effectively collect pet hair, even pet fuzz without snagging fabric. Suitable for sofas, carpets, bedding, pet bed, clothes, blanket… Reusable lint roller focuses on hair removal efficiency, so lint rollers is designed to have higher adhesion, ensuring every strand of hair is swept away. Compact design help easily get into nooks and crannies."
      },
      {
        title: "QUALITY AND ECONOMY",
        description:
          "Durable nylon and ABS plastic creates the sturdy and durability of the lint roller reusable. Ergonomic handle with 20-degree, helping using the product comfortable. The hair compartment is larger than other products with similar designs, so you will not need to waste time cleaning the roller many times when using. The pet hair roller can be reused, no need to spend extra money to buy any replacement materials."
      },
      {
        title: "GIFT FOR YOU AND PETS",
        description:
          "Cute cat hair remover make grooming time is an enjoyable time, the product is a meaningful gift for pet lovers. The product is compact and can be used by anyone from children to adults. Compact Dog Hair Remover for car convenient to carry and leave it on the car to clean the carpet and car seats."
      },
      {
        title: "EASY TO USE AND CLEAN",
        description:
          "Roll back and forth left and right so the tool collects fur. When finished, simply press the release button to open the pet hair remover and empty the waste compartment. Use a wet cloth to clean the roller and dustbin or you can also rinse the dustbin with water."
      },
      {
        title: "LIFETIME WARRANTY",
        description:
          "If anything ever happens, we'll replace pet lint roller for free. Simply contact us and we are always happy to address any of your concerns!"
      }
    ]
  };
  
}
