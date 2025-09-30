import { Component } from '@angular/core';
import { APP_IMAGES } from '../../../../shared/constant/app-images';
import { ProductDisplayComponent } from '../../../../shared/components/product-display/product-display.component';
import { CustomerReviewsData } from '../../../../shared/components/customer-reviews/customer-reviews.component';

@Component({
  selector: 'app-pet-hair-remover',
  imports: [ProductDisplayComponent],
  templateUrl: './pet-hair-remover.component.html',
  styleUrl: './pet-hair-remover.component.scss',
})
export class PetHairRemoverComponent {
  APP_IMAGES = APP_IMAGES;
  productData = {
    title:
      '1TO3GO Pet Hair Remover Roller Compact Cat/Dog Hair Remover Deep Clean Convenient to Carry Reusable Lint Roller for Carpet, Furniture,...',
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
      pricePerUnit: '$9.99/count',
    },
    seller: 'Eltri',
    fulfillment: 'Fulfilled by Amazon',
    detailUrl:
      'https://www.amazon.com/1TO3GO-Convenient-Reusable-Furniture-Clothing/dp/B0CM6WTJ21?ref_=ast_sto_dp',
    features: [
      {
        title: 'GREAT PERFORMANCE',
        description:
          'Pet hair remover helps effectively collect pet hair, even pet fuzz without snagging fabric. Suitable for sofas, carpets, bedding, pet bed, clothes, blanket… Reusable lint roller focuses on hair removal efficiency, so lint rollers is designed to have higher adhesion, ensuring every strand of hair is swept away. Compact design help easily get into nooks and crannies.',
      },
      {
        title: 'QUALITY AND ECONOMY',
        description:
          'Durable nylon and ABS plastic creates the sturdy and durability of the lint roller reusable. Ergonomic handle with 20-degree, helping using the product comfortable. The hair compartment is larger than other products with similar designs, so you will not need to waste time cleaning the roller many times when using. The pet hair roller can be reused, no need to spend extra money to buy any replacement materials.',
      },
      {
        title: 'GIFT FOR YOU AND PETS',
        description:
          'Cute cat hair remover make grooming time is an enjoyable time, the product is a meaningful gift for pet lovers. The product is compact and can be used by anyone from children to adults. Compact Dog Hair Remover for car convenient to carry and leave it on the car to clean the carpet and car seats.',
      },
      {
        title: 'EASY TO USE AND CLEAN',
        description:
          'Roll back and forth left and right so the tool collects fur. When finished, simply press the release button to open the pet hair remover and empty the waste compartment. Use a wet cloth to clean the roller and dustbin or you can also rinse the dustbin with water.',
      },
      {
        title: 'LIFETIME WARRANTY',
        description:
          "If anything ever happens, we'll replace pet lint roller for free. Simply contact us and we are always happy to address any of your concerns!",
      },
    ],
  };

  reviewsData: CustomerReviewsData = {
    overallRating: 4.4,
    totalRatings: 53,
    ratingDistribution: [
      { stars: 5, percentage: 66 },
      { stars: 4, percentage: 13 },
      { stars: 3, percentage: 18 },
      { stars: 2, percentage: 3 },
      { stars: 1, percentage: 0 },
    ],
    topReviewsTitle: 'Top reviews from the United States',
    reviews: [
      {
        id: 'review-1',
        reviewerName: 'dekaizo kumasan',
        rating: 5,
        title: 'Good size.',
        reviewDate: 'May 28, 2025',
        location: 'United States',
        color: '',
        isVerifiedPurchase: true,
        content:
          'Not too big and small. Easy control size. Clothing, bag and carpet . all mighty.',
        helpfulVotes: 0,
      },
      {
        id: 'review-2',
        reviewerName: 'ecnicolette1',
        rating: 5,
        title: 'Very good',
        reviewDate: 'March 30, 2025',
        location: 'United States',
        color: '',
        isVerifiedPurchase: true,
        content:
          'Bought this to remove lint from a black wool coat. Works great.',
        helpfulVotes: 0,
      },
      {
        id: 'review-3',
        reviewerName: 'greenbean',
        rating: 4,
        title: 'Works great!',
        reviewDate: 'July 7, 2024',
        location: 'United States',
        color: '',
        isVerifiedPurchase: true,
        content:
          'I bought this because I wanted a smaller version of my beloved Chom Chom roller that would be good to use on clothing. Chom Chom roller is a different design/mechanism than the original, so I was skeptical. This little guy is the same design and works great. While the animal design is cute, I do wish it was a little more compact for travel.',
        helpfulVotes: 6,
      },
      {
        id: 'review-4',
        reviewerName: 'Summer Hudson',
        rating: 2,
        title: 'Works but broken',
        reviewDate: 'January 22, 2025',
        location: 'United States',
        color: '',
        isVerifiedPurchase: true,
        content:
          'I think this probably works well, however the one I received had a broken clip on the compartment that collects the hair.',
        helpfulVotes: 0,
      },
      {
        id: 'review-5',
        reviewerName: 'Kindle Customer',
        rating: 5,
        title: 'Great lint brush',
        reviewDate: 'February 12, 2025',
        location: 'United States',
        color: '',
        isVerifiedPurchase: true,
        content:
          "This little brush is great for lint and dog hair. I own an Aussie and a pom. This little brush has been a real money saver. The sticky rollers add up quick. I have bought different style that works on couch but not too well on clothes I'm wearing. But the way this one is made makes it so much easier to use on yourself. I love it would definitely buy again.",
        helpfulVotes: 0,
      },
      {
        id: 'review-6',
        reviewerName: 'Shaylyn Smith',
        rating: 5,
        title: 'Recommended',
        reviewDate: 'March 5, 2025',
        location: 'United States',
        color: '',
        isVerifiedPurchase: true,
        content:
          'Perfect for smaller areas and clothing, which is what I got it for. The "door" is a little finicky, and quit working after a few days so I have it taped shut.',
        helpfulVotes: 0,
      },
      {
        id: 'review-7',
        reviewerName: 'Bear',
        rating: 5,
        title: 'Just What I Needed',
        reviewDate: 'May 6, 2024',
        location: 'United States',
        color: '',
        isVerifiedPurchase: true,
        content:
          'Works great! The functionality works beautifully for me. I have a very long-haired Persian cat who sheds even after everyday brushings. This lint brush works as described. I use it on furniture and clothes. Hair collects in the compartment just fine. Simple to empty and keep clean. I love it. Am considering about ordering a second one. I would like to have a travel sized one to keep in my car.',
        helpfulVotes: 2,
      },
    ],
  };
}
