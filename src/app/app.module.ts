import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componenes/footer/footer.component';
import { StoreComponent } from './componenes/store/store.component';
import { CardComponent } from './componenes/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StoreComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
