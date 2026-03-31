import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  imports: [CommonModule],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks {
  steps = [
    {
      img: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/components/HowItsWorkV3/assets/choose_from_the_best_pre_owned_cars_1.svg?q=85&w=330&dpr=0.8',
      title: 'Choose from the best pre-owned cars',
      desc: '20,000+ fully inspected cars online',
    },
    {
      img: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/components/HowItsWorkV3/assets/take_a_test_drive_at_your_home_or_spinny_hub_1.svg?q=85&w=400&dpr=0.8',
      title: 'Take a test drive at your home or a Spinny Hub',
      desc: 'Sanitized cars for every test drive',
    },
    {
      img: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/components/HowItsWorkV3/assets/online_payment_doorstep_delivery_1.svg?q=85&w=320&dpr=0.8',
      title: 'Online Payment. Doorstep Delivery.',
      desc: 'And 5-day money back guarantee',
    },
  ];
}
