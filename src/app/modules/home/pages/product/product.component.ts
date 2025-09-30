import { Component } from '@angular/core';
import { ProductDisplayComponent, ProductImage, ProductPrice, ProductRating } from '../../../../shared/components/product-display/product-display.component';
import { APP_IMAGES } from '../../../../shared/constant/app-images';

@Component({
  selector: 'app-product',
  imports: [ProductDisplayComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  APP_IMAGES = APP_IMAGES;
  productData = {
    title: '1TO3GO【Upgrade】 Adjustable Dog Training Collar with 4 Extra Links for Medium, Large and X-Large Dogs, Suitable for Dogs with Neck Sizes of 16 Inches or Larger',
    images: [
      { url: this.APP_IMAGES.DOG_COLLAR.COLLAR_1, alt: 'Product view 1' },
      { url: this.APP_IMAGES.DOG_COLLAR.COLLAR_2, alt: 'Product view 2' },
      { url: this.APP_IMAGES.DOG_COLLAR.COLLAR_3, alt: 'Product view 2' },
      { url: this.APP_IMAGES.DOG_COLLAR.COLLAR_4, alt: 'Product view 2' },
      { url: this.APP_IMAGES.DOG_COLLAR.COLLAR_5, alt: 'Product view 2' },
    ],
    rating: { score: 4.4, count: 53 },
    price: { 
      current: 9.99, 
      original: 12.99, 
      pricePerUnit: '$9.99/count' 
    },
    seller: 'Eltri',
    fulfillment: 'Fulfilled by Amazon',
    detailUrl: 'https://www.amazon.com/1TO3GO%E3%80%90Upgrade%E3%80%91-Adjustable-Training-X-Large-Improved/dp/B0C69RGV1W?ref_=ast_sto_dp&th=1&psc=1',
    features: [
      {
        title: 'CORRECT & INSTANT METHOD',
        description: 'Attracts your dogs attention with natural pressure, just like a puppy learns to obey its mother. No need to scream anymore, no more lunging and leash pulling, no more jumping up and barking … you just need to pull the training collar, your dog will stop bad behavior immediately and learn commands more effectively.'
      },
      {
        title: 'FRIENDLY AND COOPERATIVE',
        description: ' Effective plastic dog collar, gentle compared to other metal pinch collars. When you pull the collar, then the control of the traction will belong to your dog. The dog will be the one to choose whether to continue pulling or change the naughty behavior. Its not an owners-pet relationship, it is a friendship that grows together.'
      },
      {
        title: 'EASY TO USE',
        description: 'No need to use any other tools, you can also easily remove or add some links and adjust the collar to suit your dogs, especially for dogs that are in the growing stage. Recommended for dogs with neck sizes of 16 inches or larger. Please watch the video for details on how to adjust the dogs collar.'
      },
      {
        title: '4 EXTRA LINKS',
        description: 'You wont have to worry about the length of your dogs neck as your dog grows, 4 extra links make the pinch collar suitable for even X-large dogs (not recommended for X-large GSD)',
      },
      {
        title: 'LIFETIME WARRANTY',
        description: 'If anything ever happens, well replace the pet training collar for free. Simply contact us and we are always happy to address any of your concerns!'
      },
    ]
  };
}
