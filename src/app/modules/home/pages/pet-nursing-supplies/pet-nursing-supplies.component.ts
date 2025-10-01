import { Component } from '@angular/core';
import { ProductDisplayComponent } from '../../../../shared/components/product-display/product-display.component';
import { APP_IMAGES } from '../../../../shared/constant/app-images';
import { CustomerReviewsData } from '../../../../shared/components/customer-reviews/customer-reviews.component';

@Component({
  selector: 'app-pet-nursing-supplies',
  imports: [ProductDisplayComponent],
  templateUrl: './pet-nursing-supplies.component.html',
  styleUrl: './pet-nursing-supplies.component.scss',
})
export class PetNursingSuppliesComponent {
  APP_IMAGES = APP_IMAGES;
  productData = {
    title:
      'Pet Medicine Feeder Cat Pill Shooter Pet Piller Gun Dispenser Tool Pill Popper for Cats and Dogs (Blue)',
    rating: { score: 4.0, count: 17 },
    price: {
      current: 11.99,
      original: 11.99,
      pricePerUnit: '$11.99/count',
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
      {
        url: this.APP_IMAGES.PET_NURSING_SUPPLIES.SUPLLIES_3,
        alt: 'Product view 2',
      },
      {
        url: this.APP_IMAGES.PET_NURSING_SUPPLIES.SUPLLIES_4,
        alt: 'Product view 2',
      },
      {
        url: this.APP_IMAGES.PET_NURSING_SUPPLIES.SUPLLIES_5,
        alt: 'Product view 2',
      },
      {
        url: this.APP_IMAGES.PET_NURSING_SUPPLIES.SUPLLIES_6,
        alt: 'Product view 2',
      },{
        url: this.APP_IMAGES.PET_NURSING_SUPPLIES.SUPLLIES_7,
        alt: 'Product view 2',
      },

      {
        url: this.APP_IMAGES.PET_NURSING_SUPPLIES.SUPLLIES_8,
        alt: 'Product view 2',
      },
    ],
    seller: 'Eltri',
    fulfillment: 'Ships from Amazon',
    detailUrl:
      'https://www.amazon.com/1TO3GO-Pet-Pill-Shooter-Blue/dp/B0DJ9KVNL2?ref_=ast_sto_dp&th=1',
    features: [
      {
        title: '2 IN 1',
        description:
          'Set pill popper for cats includes 2 tools for pets to give pills and liquid medicine. In addition, the syringe with nipple can help rescue sick or newborn pets in unexpected situations.',
      },
      {
        title: 'SPECIAL FEATURES',
        description:
          'The large push head of dog pill shooter fits comfortably in your hand so you can hold it firmly, save effort, and use one hand to press the button of pill gun.',
      },
      {
        title: 'SPECIAL GIFT',
        description:
          'Used pet pill shooter for both dogs and cats, especially pets that are difficult to give medication or have no effect on pill pockets or pill wrap treats methods. Reduce stress for you and your pet when giving medication.',
      },
      {
        title: 'USAGE TIPS',
        description:
          "Pets that have difficulty give medication, wrap the pet in a towel while using the pill dispenser. Stroke the cat's neck to induce a swallowing response after giving the medicine in the pet's mouth.",
      },
      {
        title: 'WARRANTY',
        description:
          "If anything ever happens, we'll replace the pet medicine feeder for cats for free. Simply contact us and we are always happy to address any of your concerns!",
      },
    ],
  };

  reviewsData: CustomerReviewsData = {
    overallRating: 4.0,
    totalRatings: 17,
    ratingDistribution: [
      {
        stars: 5,
        percentage: 55,
      },
      {
        stars: 4,
        percentage: 17,
      },
      {
        stars: 3,
        percentage: 12,
      },
      {
        stars: 2,
        percentage: 8,
      },
      {
        stars: 1,
        percentage: 8,
      },
    ],
    topReviewsTitle: 'Top reviews from the United States',
    reviews: [
      {
        id: '1',
        reviewerName: 'Amanda Schiel',
        rating: 5,
        title: 'Pills are now a breeze',
        reviewDate: 'July 10, 2025',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: true,
        content:
          'This has made giving pills to my dog 100% easier. Just make sure to break the silcon along the slits so the pills sit in it correctly',
        helpfulVotes: 0,
      },
      {
        id: '2',
        reviewerName: 'Bohemiac',
        rating: 4,
        title: 'Great Syringe, Pill Gun Needs Work',
        reviewDate: 'August 16, 2025',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: true,
        content:
          "I really like this set, especially the syringe — it works smoothly and makes giving medicine much easier. The pill gun, however, didn't work as well as I hoped, so I couldn't give it 5 stars. Still a useful kit if you mainly need the syringe.",
        helpfulVotes: 1,
      },
      {
        id: '3',
        reviewerName: 'Miss Linda',
        rating: 3,
        title: 'Hard to use',
        reviewDate: 'June 9, 2025',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: true,
        content: 'These are too long and cumbersome.',
        helpfulVotes: 0,
      },
      {
        id: '4',
        reviewerName: 'Becky',
        rating: 5,
        title: 'Good',
        reviewDate: 'July 26, 2025',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: true,
        content: 'Works',
        helpfulVotes: 0,
      },
      {
        id: '5',
        reviewerName: 'D',
        rating: 1,
        title: 'Not reliable and difficult to use',
        reviewDate: 'September 19, 2025',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: true,
        content:
          'Very flimsy and impossible to use without two people. Would not recommend, especially when having a sick cat who needed medicine immediately and on a schedule afterwards. Ended up buying one from my vet but unfortunately, my cat passed away, partly due to the inability to administer the required medication.',
        helpfulVotes: 0,
      },
      {
        id: '6',
        reviewerName: 'Amazon Customer',
        rating: 5,
        title: 'Easiest Pill Giving',
        reviewDate: 'June 8, 2025',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: false,
        content:
          "I honestly don't know how I'd get pills down my cat without this amazing pill shooter. I just pop his pill into the rubber end, push the shooter to the back of his throat and push the end with my thumb. Easy peasy. And when you have to give your jerk cat a pill every day, this seriously makes your life easier!",
        helpfulVotes: 2,
      },
      {
        id: '7',
        reviewerName: 'PlayaPiano',
        rating: 4,
        title: 'Works Sometimes',
        reviewDate: 'June 15, 2025',
        location: 'United States',
        color: 'Blue',
        isVerifiedPurchase: false,
        content:
          "I'm not sure what's a bigger spaz out: the cat spitting out a pill or me trying to get this contraption to work. The pill falls out before I can maneuver my hand and fingers to shoot it from the device. Judging by other reviews I think it may be me, not the device but the only one having trouble. I have had one successful pulling adventure (yay!) but several unsuccessful attempts accompanied by loads of cat drool. If I can get the hang of this it should be good for 2 of our 4 cats. The two who will benefit from the quick pulling as easy going and allow for the learning curve and some cats just won't be pilled without a battle lol.",
        helpfulVotes: 2,
      },
    ],
  };
}
