import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './films/pages/list/list.component';
import { CharactersComponent } from './films/pages/characters/characters.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilmsModule } from './films/films.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ImagepipePipe } from './pipes/imagepipe.pipe';
import { FilterpipePipe } from './pipes/filterpipe.pipe';
import { IntersectorInterceptor } from './Intersector/intersector.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CharactersComponent,
    ImagepipePipe,
    FilterpipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilmsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:IntersectorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
