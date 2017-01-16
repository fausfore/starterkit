import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app@angular2.0/app.module';
import './app@react/Hello';
import './app@react/SoCool';
import './app@angular1.6/app.component';
import './app@angular1.6/app.component2';
import './app@angular1.6/app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
