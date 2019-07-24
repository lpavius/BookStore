import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HttpErrorComponent } from './http-error/http-error.component';
import { BookCartComponent } from './book-cart/book-cart.component';

const appRoutes: Routes = [
  { path: 'books',  component: BookListComponent },
  { path: 'books/cart', component: BookCartComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', component: HttpErrorComponent, data: { code: 404, message: 'No Found' } }
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    HttpErrorComponent,
    BookCartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
