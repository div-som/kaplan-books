import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {
  public bookApiUrl = 'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep';
  constructor(protected http: HttpClient) {
  }

  getBooksResponse() {
    return this.http.get(this.bookApiUrl, { observe: 'response' })
  }
}
