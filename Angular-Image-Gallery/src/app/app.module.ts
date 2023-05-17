import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CachingInterceptor } from './caching.interceptor';

@NgModule({
  declarations: [AppComponent, routingcomponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
