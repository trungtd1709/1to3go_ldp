import { Component } from '@angular/core';
import { APP_IMAGES } from '../../../../shared/constant/app-images';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  APP_IMAGES = APP_IMAGES;
  bannerImage = APP_IMAGES.BANNER.MAIN_BANNER_2;
  bannerAlt = 'About Us - 1TO3GO GROUP';
}
