import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
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