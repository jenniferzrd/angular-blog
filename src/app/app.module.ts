import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';

import { AppComponent } from './app.component';

import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


import { ArticleComponent } from './article/article.component';
import { FilterPipe } from './pipe/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    AboutComponent,
    ArticleComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
   schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
