import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selector';
import { BooksAction, BooksApiActions } from './state/books.action';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  books$: any;
  bookCollection$: any;

  constructor(private booksService: GoogleBooksService, private store: Store) {
    this.books$ = store.select(selectBooks);
    this.bookCollection$ = store.select(selectBookCollection);
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksAction.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksAction.removeBook({ bookId }));
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}
