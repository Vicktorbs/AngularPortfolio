import { Component, OnInit } from '@angular/core';
import { LanguajeService } from 'src/app/services/languaje.service';

@Component({
  selector: 'app-contact-area',
  templateUrl: './contact-area.component.html',
  styleUrls: ['./contact-area.component.css']
})
export class ContactAreaComponent implements OnInit {

  languajeBrowser: boolean = false;
  data = {
    english: {
      title: 'Get In Touch' ,
      description: `My inbox is always open. Whether you have a question or want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates or contact one of my social medial,`
    },
    esp: {
      title: 'Contactar' ,
      description: 'Si tienen alguna pregunta o quieres contactarme para algun proyecto mi puedes contactarme. Intentare respondes de la mejor manera. Siéntase libre de enviarme un correo electrónico sobre cualquier actualización de trabajo relevante o comuníquese con una de mis redes sociales.'
    }
  }

  constructor(private languajeService: LanguajeService) { }

  ngOnInit(): void {
    this.languajeBrowser = this.languajeService.lang;
    this.languajeService.languajeObservable.subscribe(response => {
      this.languajeBrowser = response;
    });
  }

}
