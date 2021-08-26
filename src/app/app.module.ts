import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {
  BookCardComponent,
  BookListsComponent,
  HeaderComponent,
  SearchComponent
} from './components';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FilterPipe, HighlightSearchPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    BookListsComponent,
    BookCardComponent,
    FilterPipe,
    HighlightSearchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
