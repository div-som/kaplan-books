import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FetchApiService } from '../fetch-api.service';
import { MatSnackbarService } from '../mat-snackbar.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(
    private snackBar: MatSnackbarService,
    private fetchApi: FetchApiService
  ) { }
  books: any;
  searchText: any;
  response :any;
  ngOnInit(): void {
    this.fetchApi.getBooksResponse().subscribe(res => {
      this.response = Object.assign({}, res.body);
      this.setBooks(this.response);
    })
  }


  setBooks(res: any) {
    this.books = res['items'];
  }
  createBook() {
    this.snackBar.openSnackBar("Create Book is Currently not supported .Please try after some time");
  }

  search(ev: any) {
    console.log(ev);
    this.books = this.response['items'].filter((res: any) => {
      console.log(res.volumeInfo.title,ev)
      if (res.volumeInfo.title.toLowerCase().includes(ev.toLowerCase())) {
        console.log("here its equal")
        return res;
      }
    })
  }
}
