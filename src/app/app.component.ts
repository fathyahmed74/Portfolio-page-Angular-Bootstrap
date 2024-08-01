import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { HomeSectionComponent } from '../home-section/home-section.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { PortfolioSectionComponent } from '../portfolio-section/portfolio-section.component';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent , HomeSectionComponent ,AboutSectionComponent ,SkillsSectionComponent,PortfolioSectionComponent,FooterComponent,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab-1';
  faCoffee = faCoffee;

}
