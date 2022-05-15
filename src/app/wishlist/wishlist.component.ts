import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist: any = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.wishlist$.subscribe((wishlist: any) => {
      this.wishlist = [...wishlist];
    });
  }
}