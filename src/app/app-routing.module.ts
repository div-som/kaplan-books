import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [{
  path: 'books',
  component: BooksComponent
}, {
  path: 'about-us',
  component: AboutUsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
