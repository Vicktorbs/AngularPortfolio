import { Component, OnInit } from '@angular/core';
import { LanguajeService } from 'src/app/services/languaje.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private languajeService: LanguajeService) { }

  ngOnInit(): void {
    const lang = this.languajeService.getlanguaje();
    console.log(lang);
  }

}
