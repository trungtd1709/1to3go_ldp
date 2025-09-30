import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface RatingDistribution {
  stars: number;
  percentage: number;
}

export interface Review {
  id: string;
  reviewerName: string;
  rating: number;
  title: string;
  reviewDate: string;
  location: string;
  color: string;
  isVerifiedPurchase: boolean;
  content: string;
  helpfulVotes: number;
  avatarUrl?: string;
}

export interface CustomerReviewsData {
  overallRating: number;
  totalRatings: number;
  ratingDistribution: RatingDistribution[];
  topReviewsTitle: string;
  reviews: Review[];
}

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.scss']
})
export class CustomerReviewsComponent {
  @Input() data!: CustomerReviewsData;

  getStarArray(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < Math.floor(rating));
  }

  getPartialStarWidth(rating: number): number {
    const decimal = rating - Math.floor(rating);
    return decimal * 100;
  }

  hasPartialStar(rating: number): boolean {
    return rating % 1 !== 0;
  }

  onHelpfulClick(reviewId: string): void {
    // Implement helpful vote logic
    console.log('Helpful clicked for review:', reviewId);
  }

  onReportClick(reviewId: string): void {
    // Implement report logic
    console.log('Report clicked for review:', reviewId);
  }

  onWriteReviewClick(): void {
    // Implement write review logic
    console.log('Write review clicked');
  }

  onHowRatingsWorkClick(): void {
    // Implement how ratings work logic
    console.log('How ratings work clicked');
  }
}