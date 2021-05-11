import { Component, OnInit } from '@angular/core';
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faEdge,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.css'],
})
export class AppFooterComponent implements OnInit {
  faEdge = faEdge;
  faMail = faEnvelope;
  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  constructor() {}

  ngOnInit(): void {}
}
