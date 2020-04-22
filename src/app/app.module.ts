import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooleanTranslationComponent } from './boolean-translation.component';
import { BooleanTranslation2Component } from './boolean-translation-2.component';

@NgModule({
  declarations: [
    AppComponent,
    BooleanTranslationComponent,
    BooleanTranslation2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
