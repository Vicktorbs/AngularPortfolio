import { Component, OnInit } from '@angular/core';
import { LanguajeService } from 'src/app/services/languaje.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nav: any;
  burger: any;
  navLinks: any;
  languajeBrowser: boolean = false;
  isChecked = false;

  constructor(private languajeService: LanguajeService) {
  }

  ngOnInit(): void {
    // this.navSlice();
    this.burger = document.querySelector('.burger');
    this.nav = document.querySelector('.nav-links');
    this.navLinks = document.querySelectorAll('.nav-links li');
    this.languajeBrowser = this.languajeService.getlanguaje();
    console.log('languaje ', this.languajeBrowser);
  }

  navSlice() {
    this.nav?.classList.toggle('nav-active');
    // Animate Links
    this.navLinks.forEach((link: any, index: any) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.7}s`;
      }
    })
    // Burger Animation
    this.burger.classList.toggle('toggle');
  }

}
