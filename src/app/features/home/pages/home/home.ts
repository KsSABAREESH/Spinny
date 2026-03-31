import { Component } from '@angular/core';
import { Navbar } from '../../../../shared/components/navbar/navbar';
import { Exploreby } from '../../../../shared/components/exploreby/exploreby';
import { HeroCarousel } from '../../components/hero-carousel/hero-carousel';
import { BuySell } from '../../components/buy-sell/buy-sell';
import { HowItWorks } from '../../components/how-it-works/how-it-works';
import { PopularBrands } from '../../components/popular-brands/popular-brands';
import { CarsAcrossIndia } from '../../components/cars-across-india/cars-across-india';
import { ExploreMore } from '../../components/explore-more/explore-more';
import { Footer } from '../../../../shared/components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Navbar,
    Exploreby,
    HeroCarousel,
    BuySell,
    HowItWorks,
    PopularBrands,
    CarsAcrossIndia,
    ExploreMore,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
