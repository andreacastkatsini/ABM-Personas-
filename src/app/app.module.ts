import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NgzorroModule } from './shared/modules/ngzorro/ngzorro.module';
import { AltaComponent } from './pages/alta/alta.component';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { AltaData } from './models/alta-data';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AltaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    NgzorroModule,
    ReactiveFormsModule,
    // InMemoryWebApiModule.forRoot(AltaData)
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
