import { Component } from '@angular/core';
import { CarouselItem } from '../../../../shared/components/carousel/carousel.component';
import { APP_IMAGES } from '../../../../shared/constant/app-images';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  APP_IMAGES = APP_IMAGES;
  carouselItems: CarouselItem[] = [
    {
      imageUrl: APP_IMAGES.BANNER.MAIN_BANNER,
      title: '1TO3GO',
      description: 'Discover the beauty of 1TO3GO',
      link: 'https://example.com'
    },  
     {
      imageUrl: APP_IMAGES.BANNER.MAIN_BANNER,
      title: '1TO3GO',
      description: 'Discover the beauty of 1TO3GO',
      link: 'https://example.com'
    },  
  ];
}
