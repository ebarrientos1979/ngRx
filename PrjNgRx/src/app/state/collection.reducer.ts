import { createReducer, on } from '@ngrx/store';
import { BooksAction } from './books.action';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(
    BooksAction.removeBook,
    (state, { bookId }) => state.filter((id) => id !== bookId) //TODO: Filtrar
  ),

  on(BooksAction.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state; //TODO: Si existe
    return [...state, bookId]; //TODO: agregando
  })
);
