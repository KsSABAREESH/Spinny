import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero-carousel',
  imports: [CommonModule],
  templateUrl: './hero-carousel.html',
  styleUrl: './hero-carousel.css',
})
export class HeroCarousel implements OnInit, OnDestroy {
  images = [
    'https://mda.spinny.com/sp-file-system/public/2025-12-03/40d438ecd01d44f1acd6ee8bdf5a7e6d/raw/file.png',
    'https://mda.spinny.com/sp-file-system/public/2026-03-09/3d2071860e5349b2834d655bbf1e18a2/raw/file.jpg',
    'https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/HomePage/components/TopBanner/assets/desktop_god_promise_home_finance.jpg?w=1500',
  ];

  get displayImages() {
    return [...this.images, this.images[0]];
  }

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 4000);
  }

  resetAutoSlide() {
    clearInterval(this.intervalId);
    this.startAutoSlide();
  }

  next() {
    this.currentIndex++;

    if (this.currentIndex === this.images.length) {
      setTimeout(() => {
        this.currentIndex = 0;
        this.disableTransition();
      }, 500);
    }

    this.enableTransition();
  }
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  handleClick(event: MouseEvent, container: HTMLElement) {
    const clickX = event.clientX;
    const mid = container.offsetWidth / 2;

    if (clickX < mid) {
      this.prev();
    } else {
      this.next();
    }

    this.resetAutoSlide();
  }
  isTransition = true;

  enableTransition() {
    this.isTransition = true;
  }

  disableTransition() {
    this.isTransition = false;

    setTimeout(() => {
      this.enableTransition();
    });
  }
}
