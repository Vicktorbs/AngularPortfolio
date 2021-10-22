import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-buttons',
  templateUrl: './contact-buttons.component.html',
  styleUrls: ['./contact-buttons.component.css']
})
export class ContactButtonsComponent implements OnInit {

  contacts = [
    {
      contactMessage: "Write me a mail",
      icon: "/assets/icons/mail.svg",
      url: "mailto:viktorb.132@gmail.com",
    },
    {
      contactMessage: "Linkedin",
      icon: "/assets/icons/linkedin.svg",
      url: "https://www.linkedin.com/in/viktor-bolanos-solis/",
    },
    {
      contactMessage: "Github",
      icon: "/assets/icons/github.svg",
      url: "https://github.com/Vicktorbs",
    },
    {
      contactMessage: "Twiter",
      icon: "/assets/icons/twitter.svg",
      url: "https://twitter.com/Viktor_b_Sq",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
