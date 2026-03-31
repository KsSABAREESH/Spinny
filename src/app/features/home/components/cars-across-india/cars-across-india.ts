import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cars-across-india',
  imports: [CommonModule],
  templateUrl: './cars-across-india.html',
  styleUrl: './cars-across-india.css',
})
export class CarsAcrossIndia {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  isAtStart = true;
  isAtEnd = false;

  ngAfterViewInit() {
    this.checkScroll();

    this.scrollContainer.nativeElement.addEventListener('scroll', () => {
      this.checkScroll();
    });
  }

  checkScroll() {
    const el = this.scrollContainer.nativeElement;

    this.isAtStart = el.scrollLeft <= 1;

    this.isAtEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth - 1; // ✅ safer
  }

  cities = [
    {
      name: 'Delhi NCR',
      hubs: '11 hubs',
      cars: '1240+ cars',
      img: 'https://spn-mda.spinny.com/img/PZWUO4hQQ6SO4pHuo1Jpkw/raw/file.png?q=85&w=226',
      color: 'rgb(255, 221, 57)',
    },
    {
      name: 'Bangalore',
      hubs: '7 hubs',
      cars: '860+ cars',
      img: 'https://spn-mda.spinny.com/img/ujBfW4dyTbCYfKeXjQQEVw/raw/file.png?q=85&w=226',
      color: 'rgb(144, 147, 248)',
    },
    {
      name: 'Pune',
      hubs: '4 hubs',
      cars: '670+ cars',
      img: 'https://spn-mda.spinny.com/img/wPyqBHDgS8a_rfxUBkyGnw/raw/file.png?q=85&w=226',
      color: 'rgb(78, 173, 138)',
    },
    {
      name: 'Mumbai',
      hubs: '5 hubs',
      cars: '650+ cars',
      img: 'https://spn-mda.spinny.com/img/5X8GuvRMSP6qYC1SQ2o4tg/raw/file.png?q=85&w=226',
      color: 'rgb(235, 51, 85)',
    },
    {
      name: 'Hyderabad',
      hubs: '4 hubs',
      cars: '600+ cars',
      img: 'https://spn-mda.spinny.com/img/c52NH2W3TDG6bnH14Y5i4g/raw/file.png?q=85&w=226',
      color: 'rgb(46, 5, 78)',
    },
    {
      name: 'Ahmedabad',
      hubs: '1 hubs',
      cars: '310+ cars',
      img: 'https://spn-mda.spinny.com/img/ExkbM4VTQPWAEEMShNJwEw/raw/file.png?q=85&w=226',
      color: 'rgb(242, 157, 56)',
    },
    {
      name: 'Kolkata',
      hubs: '2 hubs',
      cars: '270+ cars',
      img: 'https://spn-mda.spinny.com/img/K1EyBo4nSoSyCUGTp%2BVzgA/raw/file.png?q=85&w=226',
      color: 'rgb(99, 24, 164)',
    },
    {
      name: 'Chennai',
      hubs: '3 hubs',
      cars: '260+ cars',
      img: 'https://spn-mda.spinny.com/img/3vHt3OEVTDOGn8NPNxuZRQ/raw/file.png?q=85&w=226',
      color: 'rgb(73, 151, 247)',
    },
  ];

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }
}
