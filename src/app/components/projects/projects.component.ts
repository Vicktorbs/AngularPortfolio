import { Component, OnInit } from '@angular/core';
import { LanguajeService } from 'src/app/services/languaje.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  languajeBrowser: boolean = false;
  data = {
    english: {
      title: 'Some things I’ve built',
      proyects: [
        {
          title: 'GifFinderApp',
          tecs: ['React', 'Giphy API'],
          desc: 'Using react hooks and consuming the API of Giphy I built an app to let the user search gifs. The app returns a certain amount of results and keeps the oldest results.',
          codeLink: 'View code',
          deployLink: 'Try it'
        },
        {
          title: 'Fight-App',
          tecs: ['Angular'],
          desc: 'It’s a simple web game for two players where users can choose a character from Marvel or DC to fight. The game includes the actions to attack, recovery, and special attack.',
          codeLink: 'View code',
          deployLink: 'Try it'
        },
        {
          title: 'React-Shop',
          tecs: ['React (Hooks)'],
          desc: 'Reject-shop uses hooks to share information between its components, and copy the common behavior in an e-commerce site',
          codeLink: 'View code',
          deployLink: 'Try it'
        }
      ]
    },
    esp: {
      title: 'Algunos de mis proyectos personales',
      proyects: [
        {
          title: 'GifFinderApp',
          tecs: ['React', 'Giphy API'],
          desc: 'Usando los react hooks y consumiendo el API de Giphy contrui una aplicacion, que permite a los usuarios buscar gifs y obtener 8 resultados. La aplicacion mantiene un historial de lo que se ha buscado.',
          codeLink: 'Ver el código',
          deployLink: 'Probarlo'
        },
        {
          title: 'Fight-App',
          tecs: ['Angular'],
          desc: 'Es un juego web sencillo para dos jugadores, donde cada uno puede elegir un personaje de Marvel o DC y tener un "pelea". El juego incluye tres acciones: atacar, recuperarse y un ataque especial.',
          codeLink: 'Ver el código',
          deployLink: 'Probarlo'
        },
        {
          title: 'React-Shop',
          tecs: ['React (Hooks)'],
          desc: 'Reject-shop utiliza hooks para compartir informacion entre sus componentes, y replica el carrito de compras de un e-comerce',
          codeLink: 'Ver el código',
          deployLink: 'Probarlo'
        }
      ]
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
