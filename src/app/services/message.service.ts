import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private baseUrl = 'http://localhost:8085'; // Base URL for backend API

  constructor(private http: HttpClient, private translate: TranslateService) {}

  fetchTranslations(lang: string): Observable<void> {
    return this.http.get<{ [key: string]: string }>(`${this.baseUrl}/translations?lang=${lang}`).pipe(
      catchError((error) => {
        console.error('Error fetching translations:', error);
        return of(undefined);
      }),
      map((translations) => {
        if (translations) {
          this.translate.setTranslation(lang, translations, true); // Apply translations
          this.translate.use(lang); // Switch language
          return; // Return here to indicate success
        } else {
          // If no translations fetched, set the default language back
          this.translate.use('en');
        }
      })
    );
  }

}
