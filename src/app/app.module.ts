import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustumersComponent } from './custumers/custumers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCustumorComponent } from './new-custumor/new-custumor.component';
import { CustumoraccountComponent } from './custumoraccount/custumoraccount.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/', '.json'); // Adjust the path here
}

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    NavbarComponent,
    CustumersComponent,
    NewCustumorComponent,
    CustumoraccountComponent,
    LoginComponent,
    AdminTemplateComponent,
    NotAuthorizedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en', // Set the default language here
    }),
  ],

  providers: [
    provideClientHydration(),
    {provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
