import { Component, OnInit } from '@angular/core';
import { LanguajeService } from 'src/app/services/languaje.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  languajeBrowser: boolean = false;
  data = {
    english: {
      greet: 'Hello, my name is' ,
      description: 'I’m a web developer from CDMX, México. With a creative mindset and passion for learning and innovating. One of the things I love the most is building web interfaces(and occasionally designing it).'
    },
    esp: {
      greet: 'Hola, mi nombre es' ,
      description: 'Soy un desarrollador web de CDMX, México. Con una mentalidad creativa y apasionado por aprender e innovar. Me apasiona la construcción de interfaces web (y ocasionalmente diseñarlas).'
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
