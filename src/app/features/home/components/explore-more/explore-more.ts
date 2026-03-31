import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-explore-more',
  imports: [CommonModule],
  templateUrl: './explore-more.html',
  styleUrl: './explore-more.css',
})
export class ExploreMore {
  hoverIndex: string = '';

  exploreItems = [
    {
      title: 'Loan',
      desc: 'Get your car financed today',
      cta: 'Check eligibility',
      icon: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/ExploreMore/assets/loan_headingV2.svg?q=85&w=480&dpr=1.0',
      bg: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/ExploreMore/assets/loan-desktopV3.svg?q=85&w=480',
    },
    {
      title: 'Buyback',
      desc: 'Commit less, drive more',
      cta: 'Explore buyback',
      icon: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/ExploreMore/assets/buyback_headingV2.svg?q=85&w=480&dpr=1.0',
      bg: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/ExploreMore/assets/buyback-desktopV3.svg?q=85&w=480',
    },
    {
      title: 'FASTag',
      desc: 'Tap > Recharge > Go',
      cta: 'Recharge FASTag',
      icon: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/ExploreMore/assets/fastag_headingV2.svg?q=85&w=480&dpr=1.0',
      bg: 'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/ExploreMore/assets/fastag-desktopV3.svg?q=85&w=480',
    },
  ];
}
