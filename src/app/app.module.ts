import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooleanTranslationComponent } from './boolean-translation.component';

@NgModule({
  declarations: [
    AppComponent,
    BooleanTranslationComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
