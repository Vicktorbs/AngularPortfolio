import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }
  
  ngOnInit(): void {
    this.navSlice();
  }

  navSlice() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger?.addEventListener('click', () => {
      // Toggle Nav
      nav?.classList.toggle('nav-active');
      // Animate Links
      navLinks.forEach((link: any, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.7}s`;
        }
      })
      // Burger Animation
      burger.classList.toggle('toggle');
    });
  }

}
