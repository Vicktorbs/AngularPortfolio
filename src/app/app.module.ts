import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactButtonsComponent } from './components/contact-buttons/contact-buttons.component';
import { ContactAreaComponent } from './components/contact-area/contact-area.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    ContactButtonsComponent,
    ContactAreaComponent,
    FooterComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
