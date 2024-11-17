import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {ResumeComponent} from "./resume/resume.component";
import {SkillsComponent} from "./skills/skills.component";
import {HeaderComponent} from "./header/header.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, ResumeComponent, SkillsComponent, HeaderComponent, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-intro';
}
