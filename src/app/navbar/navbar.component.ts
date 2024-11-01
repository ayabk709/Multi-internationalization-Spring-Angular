import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {TranslationService} from "../services/message.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor( private translationService: TranslationService,public authService:AuthService,private router:Router) {}

  ngOnInit() {
    // Fetch translations for the default language (e.g., English)
    this.translationService.fetchTranslations('en').subscribe();
  }

  handleLogout(){
    this.authService.logout();

  }
  changeLanguage(lang: string) {
    this.translationService.fetchTranslations(lang).subscribe(() => {
      console.log(`Language changed to ${lang}`);
    });
  }

}
