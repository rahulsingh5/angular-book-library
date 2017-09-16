import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdExpansionModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule,
  MdSidenavModule,
  MdToolbarModule
} from '@angular/material';
import { NavigationComponent } from './navigation/navigation.component';
import { BookContainerComponent } from './book-container/book-container.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookContainerComponent,
    BookListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdMenuModule,
    MdSidenavModule,
    MdListModule,
    MdExpansionModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
