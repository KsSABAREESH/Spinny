import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-brands',
  imports: [CommonModule],
  templateUrl: './popular-brands.html',
  styleUrl: './popular-brands.css',
})
export class PopularBrands {
  brands = [
    {
      name: 'Hyundai',
      count: '20+ cars',
      logo: 'https://spinny-images.gumlet.io/images/cars/new/makes/hyundai/logos/197x71.png?q=85&w=50&dpr=1.0',
    },
    {
      name: 'Maruti Suzuki',
      count: '20+ cars',
      logo: 'https://spinny-images.gumlet.io/images/cars/new/makes/maruti-suzuki/logos/197x71.png?q=85&w=100&dpr=1.0',
    },
    {
      name: 'Tata',
      count: '10+ cars',
      logo: 'https://spinny-images.gumlet.io/images/cars/new/makes/tata/logos/197x71.png?q=85&w=50&dpr=1.0',
    },
    {
      name: 'Honda',
      count: '10+ cars',
      logo: 'https://spinny-images.gumlet.io/images/cars/new/makes/honda/logos/197x71.png?q=85&w=50&dpr=1.0',
    },
    {
      name: 'Mahindra',
      count: '7 cars',
      logo: 'https://spinny-images.gumlet.io/images/cars/new/makes/mahindra/logos/197x71.png?q=85&w=70&dpr=1.0',
    },
    {
      name: 'Renault',
      count: '7 cars',
      logo: 'https://spinny-images.gumlet.io/images/cars/new/makes/renault/logos/197x71.png?q=85&w=50&dpr=1.0',
    },

    {
      name: 'Volkswagen',
      count: '7 cars',
      logo: 'https://spinny-images.gumlet.io/images/cars/new/makes/volkswagen/logos/197x71.png?q=85&w=70&dpr=1.0',
    },
    {
      name: 'Datsun',
      count: '6 cars',
      logo: 'https://spinny-images.gumlet.io/images/cars/new/makes/datsun/logos/197x71.png?q=85&w=50&dpr=1.0',
    },
    {
      name: 'Kia',
      count: '6 cars',
      logo: 'https://spinny-images.gumlet.io/images/cars/new/makes/kia/logos/197x71.png?q=85&w=50&dpr=1.0',
    },
    {
      name: 'Ford',
      count: '3 cars',
      logo: 'https://spinny-images.gumlet.io/images/cars/new/makes/ford/logos/197x71.png?q=85&w=50&dpr=1.0',
    },
    {
      name: 'Toyota',
      count: '3 cars',
      logo: 'https://spinny-images.gumlet.io/images/cars/new/makes/toyota/logos/197x71.png?q=85&w=50&dpr=1.0',
    },

    {
      name: 'Spinny MAX',
      count: '',
      logo: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/PopularBrands/assets/maxLogo_v2.svg?q=85&w=200&dpr=1.0',
    },
  ];
}
