import { Component } from '@angular/core';
import {
  ProductDisplayComponent,
  ProductImage,
  ProductPrice,
  ProductRating,
} from '../../../../shared/components/product-display/product-display.component';
import { APP_IMAGES } from '../../../../shared/constant/app-images';
import { CustomerReviewsData } from '../../../../shared/components/customer-reviews/customer-reviews.component';

@Component({
  selector: 'app-product',
  imports: [ProductDisplayComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  APP_IMAGES = APP_IMAGES;
  productData = {
    title:
      '1TO3GO【Upgrade】 Adjustable Dog Training Collar with 4 Extra Links for Medium, Large and X-Large Dogs, Suitable for Dogs with Neck Sizes of 16 Inches or Larger',
    images: [
      { url: this.APP_IMAGES.DOG_COLLAR.COLLAR_1, alt: 'Product view 1' },
      { url: this.APP_IMAGES.DOG_COLLAR.COLLAR_2, alt: 'Product view 2' },
      { url: this.APP_IMAGES.DOG_COLLAR.COLLAR_3, alt: 'Product view 2' },
      { url: this.APP_IMAGES.DOG_COLLAR.COLLAR_4, alt: 'Product view 2' },
      { url: this.APP_IMAGES.DOG_COLLAR.COLLAR_5, alt: 'Product view 2' },
    ],
    rating: { score: 4.1, count: 146 },
    price: {
      current: 9.99,
      original: 12.99,
      pricePerUnit: '$9.99/count',
    },
    seller: 'Eltri',
    fulfillment: 'Fulfilled by Amazon',
    detailUrl:
      'https://www.amazon.com/dp/B0C69RGV1W',
    features: [
      {
        title: 'CORRECT & INSTANT METHOD',
        description:
          'Attracts your dogs attention with natural pressure, just like a puppy learns to obey its mother. No need to scream anymore, no more lunging and leash pulling, no more jumping up and barking … you just need to pull the training collar, your dog will stop bad behavior immediately and learn commands more effectively.',
      },
      {
        title: 'FRIENDLY AND COOPERATIVE',
        description:
          ' Effective plastic dog collar, gentle compared to other metal pinch collars. When you pull the collar, then the control of the traction will belong to your dog. The dog will be the one to choose whether to continue pulling or change the naughty behavior. Its not an owners-pet relationship, it is a friendship that grows together.',
      },
      {
        title: 'EASY TO USE',
        description:
          'No need to use any other tools, you can also easily remove or add some links and adjust the collar to suit your dogs, especially for dogs that are in the growing stage. Recommended for dogs with neck sizes of 16 inches or larger. Please watch the video for details on how to adjust the dogs collar.',
      },
      {
        title: '4 EXTRA LINKS',
        description:
          'You wont have to worry about the length of your dogs neck as your dog grows, 4 extra links make the pinch collar suitable for even X-large dogs (not recommended for X-large GSD)',
      },
      {
        title: 'LIFETIME WARRANTY',
        description:
          'If anything ever happens, well replace the pet training collar for free. Simply contact us and we are always happy to address any of your concerns!',
      },
    ],
  };

  reviewsData: CustomerReviewsData = {
    overallRating: 4.1,
    totalRatings: 146,
    ratingDistribution: [
      {
        stars: 5,
        percentage: 63,
      },
      {
        stars: 4,
        percentage: 11,
      },
      {
        stars: 3,
        percentage: 9,
      },
      {
        stars: 2,
        percentage: 6,
      },
      {
        stars: 1,
        percentage: 11,
      },
    ],
    topReviewsTitle: 'Top reviews from the United States',
    reviews: [
      {
        id: 'review-1',
        reviewerName: 'Regan',
        rating: 5,
        title: 'Effective dog training aid.',
        reviewDate: 'November 18, 2024',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: true,
        content:
          'I have used this style of training collar with two dogs, about 15 years apart. I found both dogs to respond immediately to its use. I bought it the first time after reading that it simulates how a mother dog might nip at her pups when they get out of line. I think that description is fitting. The triangles in the collar close up when you pull on the lead and pinch the neck. This might sound mean, but your dog needs strong direction and my dogs did not yip or cry out when I used the collar. They do look back at me and as I have their attention, I deliver the correcting command. Very effective for heel training. Dogs learn quickly not to pull. Eventually, I was able to walk my first dog with just a regular collar, no choke chain or any other kind of correction/training collar. I expect our new buddy to learn the same great behavior and I credit my success with the use of this collar, patience, and lots of positive reinforcement when my dog does the right thing. Good luck!',
        helpfulVotes: 8,
      },
      {
        id: 'review-2',
        reviewerName: 'kevin l',
        rating: 5,
        title: 'High quality Great price',
        reviewDate: 'April 15, 2025',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: true,
        content:
          'Love this collar. I have a golden retriever that loves to pull on the leash. This helps me keep it down to a level that we are able to go on walks together again.',
        helpfulVotes: 3,
      },
      {
        id: 'review-3',
        reviewerName: 'Mark L.',
        rating: 5,
        title: 'Was going to return it ....',
        reviewDate: 'January 13, 2025',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: true,
        content:
          'It was too large, so was going to return for a smaller one. Then thought IF it has links to add, why not take some away and make it fit. So simple, and avoided a return. My dog has been a "puller", and from the moment this collar went, so far in just three days he has learned how far he can go. GAME CHANGER. I had held off getting one of these types of collars as I think they are cruel (the metal spikes), then while surfing through them all again saw this one in plastic. So much better.',
        helpfulVotes: 6,
      },
      {
        id: 'review-4',
        reviewerName: 'Linda',
        rating: 1,
        title: 'Do not buy',
        reviewDate: 'December 12, 2023',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: true,
        content:
          "I am a dog trainer. I bought 3 of these to try out as an alternative to the Starmark brand. All 3 broke. The ring on the collar that is suppose to hold the leash clip is NOT welded and will fail if the dog makes a quick hard lung. Very dangerous product. The manufacturer needs to correct this. Don't be fooled by a stronger ring advertisement by the manufacturer, it's still not welded together and WILL break. Go with Starmark. I have had good success with that brand. I saw that several people have already",
        helpfulVotes: 14,
      },
      {
        id: 'review-5',
        reviewerName: 'Jenny L DeMichael',
        rating: 4,
        title:
          'Great product-needs stronger rope connector if your dog is strong',
        reviewDate: 'April 7, 2025',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: true,
        content:
          "I absolutely loved this item!! Purchased back in February 2025. It helped correct pulling behavior immediately. Tank is only 40lbs but is strong and today April2025, the collar broke(only the rope) I'm extremely sad about this and will try to fix on my own with stronger material, but it's a great product!!!",
        helpfulVotes: 3,
      },
      {
        id: 'review-6',
        reviewerName: 'Amazon Customer',
        rating: 5,
        title: 'Works as designed!',
        reviewDate: 'April 3, 2025',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: true,
        content:
          'Works very well and is very easy to use. My dog likes it, and I do, too!',
        helpfulVotes: 1,
      },
      {
        id: 'review-7',
        reviewerName: 'susan doughtie',
        rating: 3,
        title: 'Arrived quickly',
        reviewDate: 'January 18, 2024',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: true,
        content:
          "The collar is ok. I bought it per a suggestion by a trainer. I guess it works somewhat, doesn't totally deter my puppy. But he IS a bit headstrong. The collar appears to be well made & durable. What I don't like about it is the removing or adding links process. They send an instructional pamphlet with instructions how to do it but it's a bit confusing to me & I haven't been able to figure it out yet. Other then that. For the price & quick shipping I'd recommend it.",
        helpfulVotes: 2,
      },
      {
        id: 'review-8',
        reviewerName: 'Rabi Tripathi',
        rating: 2,
        title: 'Can not recommend',
        reviewDate: 'September 4, 2025',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: true,
        content:
          "Did not snap like the other brand. Works fine on my lab mix. On my golden retriever, not so well. His fur always gets pinched in one part of the collar or another, causing him to stop walking. His collar's end piece also tends to come loose when off his neck. Must be manufacturing defect",
        helpfulVotes: 0,
      },
    ],
  };
}
