import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  scrollHome() {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }

  scrollToAbout() {
    const about = document.getElementById("about-section");
    if (about) {
      about.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }

  scrollToSkills() {
    const about = document.getElementById("skills-section");
    if (about) {
      about.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }

  scrollToResume() {
    const about = document.getElementById("resume-section");
    if (about) {
      about.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }
}
