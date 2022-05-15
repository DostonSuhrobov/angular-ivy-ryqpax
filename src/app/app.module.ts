import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { BooklistComponent } from './booklist/booklist.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BooklistComponent,
    WishlistComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
