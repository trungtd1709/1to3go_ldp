import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerReviewsComponent, CustomerReviewsData } from '../customer-reviews/customer-reviews.component';

export interface ProductImage {
  url: string;
  alt: string;
}

export interface ProductRating {
  score: number;
  count: number;
}

export interface ProductPrice {
  current: number;
  original?: number;
  discount?: number;
  pricePerUnit?: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [CommonModule, CustomerReviewsComponent],
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent {
  @Input() title: string = '';
  @Input() images: ProductImage[] = [];
  @Input() rating: ProductRating = { score: 0, count: 0 };
  @Input() price: ProductPrice = { current: 0 };
  @Input() deliveryDate: string = '';
  @Input() seller: string = '';
  @Input() fulfillment: string = '';
  @Input() features: ProductFeature[] = [];
  @Input() showMoreExpanded: boolean = false;
  @Input() detailsUrl: string = '';
  @Input() reviewsData: CustomerReviewsData  = {
    overallRating: 0,
    totalRatings: 0,
    ratingDistribution: [],
    topReviewsTitle: '',
    reviews: []
  };
  // reviewsData: CustomerReviewsData = {
  //   overallRating: 4.0,
  //   totalRatings: 17,
  //   ratingDistribution: [
  //     { stars: 5, percentage: 55 },
  //     { stars: 4, percentage: 17 },
  //     { stars: 3, percentage: 12 },
  //     { stars: 2, percentage: 8 },
  //     { stars: 1, percentage: 8 }
  //   ],
  //   topReviewsTitle: 'Top reviews from the United States',
  //   reviews: [
  //     {
  //       id: '1',
  //       reviewerName: 'Amanda Schiel',
  //       rating: 5,
  //       title: 'Pills are now a breeze',
  //       reviewDate: 'July 10, 2025',
  //       location: 'the United States',
  //       color: 'Blue',
  //       isVerifiedPurchase: true,
  //       content: 'This has made giving pills to my dog 1000% easier. Just make sure to break the silicon along the slits so the pills sit in it correctly',
  //       helpfulVotes: 0
  //     },
  //     {
  //       id: '2',
  //       reviewerName: 'Bohemiac',
  //       rating: 4,
  //       title: 'Great Syringe, Pill Gun Needs Work',
  //       reviewDate: 'August 16, 2025',
  //       location: 'the United States',
  //       color: 'Blue',
  //       isVerifiedPurchase: true,
  //       content: 'I really like this set, especially the syringe — it works smoothly and makes giving medicine much easier. The pill gun, however, didn\'t work as well as I hoped, so I couldn\'t give it 5 stars. Still a useful kit if you mainly need the syringe.',
  //       helpfulVotes: 1
  //     }
  //     // Add more reviews as needed
  //   ]
  // };

  currentImageIndex = 0;

  get ratingStars(): boolean[] {
    const stars: boolean[] = [];
    const fullStars = Math.floor(this.rating.score);
    const hasHalfStar = this.rating.score % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars || (i === fullStars && hasHalfStar));
    }
    return stars;
  }

  get discountPercentage(): number | null {
    if (this.price.original && this.price.current) {
      return Math.round(((this.price.original - this.price.current) / this.price.original) * 100);
    }
    return null;
  }

  previousImage(): void {
    if (this.images.length > 0) {
      this.currentImageIndex = this.currentImageIndex === 0 
        ? this.images.length - 1 
        : this.currentImageIndex - 1;
    }
  }

  nextImage(): void {
    if (this.images.length > 0) {
      this.currentImageIndex = this.currentImageIndex === this.images.length - 1 
        ? 0 
        : this.currentImageIndex + 1;
    }
  }

  toggleShowMore(): void {
    this.showMoreExpanded = !this.showMoreExpanded;
  }

  onSeeAllDetails(): void {
    if (this.detailsUrl) {
      window.open(this.detailsUrl, '_blank');
    }
    console.log('See all details clicked');
  }
}