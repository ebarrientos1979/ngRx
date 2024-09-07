import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { booksReducer } from './state/books.reducer';
import { collectionReducer } from './state/collection.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { BookListComponent } from './book-list/book.list.component';
import { BookCollectionComponent } from './book-collection/book.collection.component';

@NgModule({
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
