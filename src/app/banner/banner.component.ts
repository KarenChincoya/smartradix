import { Component } from "@angular/core";

@Component({
  selector: 'app-banner-component',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent {
  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  images = ['../assets/images/main7.jpeg', '../assets/images/main8.jpg', '../assets/images/tomates2.jpg' ];
}
