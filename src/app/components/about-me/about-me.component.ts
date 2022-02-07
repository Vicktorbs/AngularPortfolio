import { Component, OnInit } from '@angular/core';
import { LanguajeService } from 'src/app/services/languaje.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  languajeBrowser: boolean = false;
  data = {
    english: {
      title: 'About me',
      text1: 'I’m a Computer Systems Engineer, I got my degree in May 2021, and during my career, I focused on web development using the stack MEAN to become a Full-Stack developer.',
      text2: 'I’ve been working recently with technologies like Python, React, Svelte, NodeJs, MySQL, MongoDB, Angular5+, Express, HTML, CSS, Git, and Figma.'
    },
    esp: {
      title: 'Sobre mi',
      text1: 'Soy un Ingeniero en Sistemas Computacionales. Me gradue en Mayo del 2021, y mientras cursaba la carrera me enfoque en el desarrollo web con el stack MEAN para volverme un desarrollador Full-Stack',
      text2: 'Tengo experiencia utilizando herramientas como Python, React, Svelte, NodeJs, MySQL, MongoDB, Angular5+, Express, HTML, CSS, Git, and Figma.'
    }
  }

  constructor(private languajeService: LanguajeService) { }

  ngOnInit(): void {
    this.languajeBrowser = this.languajeService.lang;
    this.languajeService.languajeObservable.subscribe(response => {
      this.languajeBrowser = response;
    })
  }

}
