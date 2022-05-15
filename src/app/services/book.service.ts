import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  private booklist = [];
  private blsbj$ = new Subject();
  booklist$ = this.blsbj$.asObservable();

  private wishlist = [];
  private wlsbj$ = new Subject();
  wishlist$ = this.wlsbj$.asObservable();

  constructor(private http: HttpClient) {}

  deletFromWishList(id: string) {}

  addToWishList(id: string) {
    const book = this.booklist.find((book) => book.id === id);
    const bookInwish = this.wishlist.find(book => book.id === id);

    if (!book || bookInwish) return;

    this.wishlist = [...this.wishlist, book];
    this.wlsbj$.next(this.wishlist);
  }

  getBooks(keyword: string) {
    this.http
      .get([this.baseUrl, keyword].join(''))
      .pipe(
        map((bookobj: any) => {
          const arr = bookobj.items.map((obj: any) => {
            return {
              bookname: obj.volumeInfo.title,
              id: obj.id,
            };
          });
          return arr;
        }),
        tap((booklist) => {
          this.booklist = [...booklist];
          this.blsbj$.next(this.booklist);
        })
      )
      .subscribe();
  }
}
