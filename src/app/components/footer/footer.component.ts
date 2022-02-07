import { Component, OnInit } from '@angular/core';
import { LanguajeService } from 'src/app/services/languaje.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  languajeBrowser: boolean = false;
  data = {
    english: {
      description: 'Designed & Built by Víctor Bolaños Solís'
    },
    esp: {
      description: 'Diseñado y creado por Víctor Bolaños Solís'
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
