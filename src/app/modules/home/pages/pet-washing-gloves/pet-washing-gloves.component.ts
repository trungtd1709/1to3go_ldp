import { Component } from '@angular/core';
import { APP_IMAGES } from '../../../../shared/constant/app-images';
import { ProductDisplayComponent } from '../../../../shared/components/product-display/product-display.component';
import { CustomerReviewsData } from '../../../../shared/components/customer-reviews/customer-reviews.component';

@Component({
  selector: 'app-pet-washing-gloves',
  imports: [ProductDisplayComponent],
  templateUrl: './pet-washing-gloves.component.html',
  styleUrl: './pet-washing-gloves.component.scss',
})
export class PetWashingGlovesComponent {
  APP_IMAGES = APP_IMAGES;
  productData = {
    title:
      '1TO3GO Pet Grooming Gloves Pet Hair Remover Cat, Dog Washing Gloves Silicone Heat Resistant Cleaning Gloves with High-Density Teeth...',
    rating: { score: 4.3, count: 322 },
    images: [
      {
        url: this.APP_IMAGES.PET_WASHING_GLOVES.GLOVES_1,
        alt: 'Product view 1',
      },
      {
        url: this.APP_IMAGES.PET_WASHING_GLOVES.GLOVES_2,
        alt: 'Product view 2',
      },
      {
        url: this.APP_IMAGES.PET_WASHING_GLOVES.GLOVES_3,
        alt: 'Product view 3',
      },
      {
        url: this.APP_IMAGES.PET_WASHING_GLOVES.GLOVES_4,
        alt: 'Product view 4',
      },
    ],
    price: {
      current: 12.99,
      original: 12.99,
      pricePerUnit: '$12.99/count',
    },
    seller: 'Eltri',
    fulfillment: 'Fulfilled by Amazon',
    detailUrl:
      'https://www.amazon.com/dp/B0C2ZBSM12',
    features: [
      {
        title: 'UPGRADED DESIGN',
        description:
          "Dog washing gloves are designed with a longer than ordinary one and added elastic to help ensure 100% don't slip out of hands. Especially useful when you have scratches and don't want water or soap to get inside. Longer and thicker design of grooming gloves for dogs protects hands from accidental scratches when bathing your pet.",
      },
      {
        title: 'RELAXING TIME',
        description:
          'Cat grooming gloves are a combination of gloves and a brush with soft bristles, so very easy to foam. You can also use it to stroke, massage and removing lost hairs. A great way to show interest. With more than 3000 soft brush heads designed to increase contact and friction, your pet is both deeply cleaned but still feels very comfortable.',
      },
      {
        title: 'SAFE & RELIABLE',
        description:
          'Cat gloves for grooming are made of high-quality silicone material, durable, non-toxic to ensure safety for you and your pets and reusable. Beside pet gloves grooming for cats is heat resistant up to 450 degrees F, especially the hand part can be disinfected with hot water.',
      },
      {
        title: 'MULTI-PURPOSE',
        description:
          'Not only used to bathe and massage all kinds of pets such as cats, dogs and rabbits, horses... Dog grooming gloves can also be used to wash dishes, fruits, furniture, cars and other items or even taking hot items.',
      },
      {
        title: 'LIFETIME WARRANTY',
        description:
          "If anything ever happens, we'll replace the pet washing glove for free. Simply contact us and we are always happy to address any of your concerns!",
      },
    ],
  };

  reviewsData: CustomerReviewsData = {
    overallRating: 4.3,
    totalRatings: 322,
    ratingDistribution: [
      {
        stars: 5,
        percentage: 67,
      },
      {
        stars: 4,
        percentage: 14,
      },
      {
        stars: 3,
        percentage: 10,
      },
      {
        stars: 2,
        percentage: 4,
      },
      {
        stars: 1,
        percentage: 5,
      },
    ],
    topReviewsTitle: 'Top reviews from the United States',
    reviews: [
      {
        id: 'review-1',
        reviewerName: 'James',
        rating: 5,
        title: 'Awesome!',
        reviewDate: 'March 2, 2025',
        location: 'United States',
        color: '1 Pair - Gray',
        isVerifiedPurchase: true,
        content:
          "Finally had the chance to use these and gotta say, I wish I would have got them sooner. They are a bit small for me (male, usually wears a large glove size). After a bit of tugging on them though, they are great. They really do make more lather than without. They also seem to massage my dog as he relaxed a lot while bathing him. They seem to be made with decent quality. With all the tugging I did to get them on, I didn't have any issues. Just remember to put them on while your hands are still try. :D",
        helpfulVotes: 6,
      },
      {
        id: 'review-2',
        reviewerName: 'Jayde',
        rating: 5,
        title: 'Definitely worth a buy',
        reviewDate: 'March 20, 2025',
        location: 'United States',
        color: '1 Pair - Gray',
        isVerifiedPurchase: true,
        content:
          'Really good quality very functional for washing. My dogs fits really nice really good at removing excess hair and prevent preventing me from getting super wet. Bristles are soft very easy to use dogs love the nice scrub',
        helpfulVotes: 2,
      },
      {
        id: 'review-3',
        reviewerName: 'Krystal Jennette',
        rating: 4,
        title: 'Fits like a glove',
        reviewDate: 'July 25, 2025',
        location: 'United States',
        color: '1 Pair - Gray',
        isVerifiedPurchase: true,
        content:
          'Gloves work great, wish they had just a little bit more flexibility',
        helpfulVotes: 0,
      },
      {
        id: 'review-4',
        reviewerName: 'Pam',
        rating: 5,
        title: 'Arm Saver for Bathing Cats',
        reviewDate: 'June 26, 2025',
        location: 'United States',
        color: '1 Pair - Gray',
        isVerifiedPurchase: true,
        content:
          'What a lifesaver! I had a cat that got skunked so he had to have a bath. Yikes! The gloves protected my hands and arms very well.',
        helpfulVotes: 4,
      },
      {
        id: 'review-5',
        reviewerName: 'jannell',
        rating: 3,
        title: 'Works great but not for everyday use',
        reviewDate: 'August 30, 2024',
        location: 'United States',
        color: '1 Pair - Gray',
        isVerifiedPurchase: true,
        content:
          'The product was great but unfortunately since I was using them everyday for work the got worn quickly especially the thin material started to rip and water kept entering the gloves. The gloves themselves lather great and are in still condition..',
        helpfulVotes: 6,
      },
      {
        id: 'review-6',
        reviewerName: 'Summer',
        rating: 5,
        title: 'Works Amazing! No scratches at all!',
        reviewDate: 'April 20, 2025',
        location: 'United States',
        color: '1 Pair - Blue',
        isVerifiedPurchase: true,
        content:
          "I hardly ever write positive reviews but I HAD to for this product. I have an elderly cat who was in the stable when Jesus was born. She's ANCIENT and she's can't groom herself well. The only place that bathes cats in our area is 30 minutes away and it's $50. I bought these gloves and a bathing sack to do it myself and I didn't even need the sack! These gloves worked so well. I don't even have a scratch and the silicone bristles were so helpful in removing all the loose hair! YOU NEED THESE GLOVES!",
        helpfulVotes: 13,
      },
    ],
  };
}
