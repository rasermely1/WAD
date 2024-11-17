export class App {
  title = 'ryan-resume-site';

  scrollToAbout() {
    const about = document.getElementById("about-section");
    if (about) {
      about.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }

  scrollToContact() {
    const about = document.getElementById("contact-section");
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
