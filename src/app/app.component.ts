import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { debounceTime, filter, tap } from 'rxjs/operators';
import { BookService } from './services/book.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('inputbox', { static: true }) inputbox: ElementRef;

  constructor(private bookservice: BookService, private http: HttpClient) {}

  ngOnInit(): void {
    fromEvent(this.inputbox.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        filter((_) => {
          const keyword = this.inputbox.nativeElement.value;
          return keyword.trim();
        }),
        tap((_) => {
          const keyword = this.inputbox.nativeElement.value.trim();
          this.bookservice.getBooks(keyword);
        })
      )
      .subscribe();
  }
}
