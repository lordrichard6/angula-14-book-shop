import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { BookComponent } from './book/book.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BooksComponent, BookComponent],
  providers: [BooksService],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [BooksComponent],
})
export class BooksModule {}
