import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technoloy-icon',
  templateUrl: './technoloy-icon.component.html',
  styleUrls: ['./technoloy-icon.component.css']
})
export class TechnoloyIconComponent implements OnInit {

  iconsArr = [
    { title: 'Angular', src: '/assets/icons/angular_icon.png' },
    { title: 'React', src: '/assets/icons/react_icon.png' },
    { title: 'Svelte', src: '/assets/icons/svelte_icon.png' },
    { title: 'JavaScript', src: '/assets/icons/javascript_icon.png' },
    { title: 'HTLM', src: '/assets/icons/html_icon.png' },
    { title: 'CSS', src: '/assets/icons/css_icon.png' },
    { title: 'Node', src: '/assets/icons/node_icon.png' },
    { title: 'Express', src: '/assets/icons/express_icon_.png' },
    { title: 'Python', src: '/assets/icons/python_icon.png' },
    { title: 'MongoDB', src: '/assets/icons/mongodb_icon.png' },
    { title: 'MySQL', src: '/assets/icons/mysql_icon.png' },
    { title: 'Git', src: '/assets/icons/git_icon.png' },
    { title: 'Figma', src: '/assets/icons/figma_icon.png' },
    { title: 'Jest', src: '/assets/icons/jest_icon.png' },
    { title: 'Bootstrap', src: '/assets/icons/bootstrap_icon.png' },
    { title: 'Linux', src: '/assets/icons/linux_icon.png' },
    { title: 'Php', src: '/assets/icons/php_icon.png' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
