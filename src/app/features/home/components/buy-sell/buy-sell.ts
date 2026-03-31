import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-sell',
  imports: [CommonModule],
  templateUrl: './buy-sell.html',
  styleUrl: './buy-sell.css',
})
export class BuySell {
  activeTab: 'buy' | 'sell' = 'buy';

  buyImages = [
    {
      img: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/BuyAndSellTab/assets/200-point-inspection-desktopV2.jpg?q=85',
      title: '200-Points Inspection',
      desc: 'Every car is carefully handpicked after a thorough quality inspection.',
    },
    {
      img: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/BuyAndSellTab/assets/1-year-warranty-desktopV2.jpg?q=85',
      title: 'Warranty included',
      desc: 'Our way of being there for you through your car ownership journey.',
    },
    {
      img: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/BuyAndSellTab/assets/money-back-desktopV2.jpg?q=85',
      title: '5-Day Money Back',
      desc: 'All our cars come with a no-questions-asked 5 day money back guarantee.',
    },
    {
      img: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/BuyAndSellTab/assets/fixed-price-desktopV2.jpg?q=85',
      title: 'Fixed Price Assurance',
      desc: 'No more endless negotiations or haggling.',
    },
  ];

  brands = [
    {
      name: 'Maruti Suzuki',
      logo: 'https://mda.spinny.com/spinny-web/media/cars/makes/maruti-suzuki/logos/maruti-suzuki.webp',
    },
    {
      name: 'Hyundai',
      logo: 'https://mda.spinny.com/spinny-web/media/cars/makes/hyundai/logos/hyundai.webp',
    },
    {
      name: 'Tata',
      logo: 'https://mda.spinny.com/spinny-web/media/cars/makes/tata/logos/tata.webp',
    },
    {
      name: 'Honda',
      logo: 'https://mda.spinny.com/spinny-web/media/cars/makes/honda/logos/honda.webp',
    },
    {
      name: 'Renault',
      logo: 'https://mda.spinny.com/spinny-web/media/cars/makes/renault/logos/renault.webp',
    },
    {
      name: 'Ford',
      logo: 'https://spn-sta.spinny.com/spinny-web/oth/raMicD2JTFa1JOLFZewdpg/raw/file.webp',
    },
    {
      name: 'Volkswagen',
      logo: 'https://mda.spinny.com/spinny-web/media/cars/makes/volkswagen/logos/volkswagen.webp',
    },
    {
      name: 'Mahindra',
      logo: 'https://spn-sta.spinny.com/spinny-web/oth/8GlhsoBSSg6L5A%2Bq6dAfiA/raw/file.webp',
    },
    { name: 'Kia', logo: 'https://mda.spinny.com/spinny-web/media/cars/makes/kia/logos/v1.webp' },
    { name: 'BMW', logo: 'https://mda.spinny.com/spinny-web/media/cars/makes/bmw/logos/v1.png' },
    {
      name: 'Mercedes-Benz',
      logo: 'https://mda.spinny.com/spinny-web/media/cars/makes/mercedes-benz/logos/v1.png',
    },
  ];
}
