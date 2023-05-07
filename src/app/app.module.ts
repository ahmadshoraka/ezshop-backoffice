import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { EzpPreloadingStrategy } from './core/common/preloading-strategy';
import { AuthInterceptor } from './core/interseptor/auth-interseptor';
import { NgxImageCompressService } from 'ngx-image-compress';
import { AppRoutingModule } from './app-routing.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LeafletModule,
    // PanelModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: authInterceptorFactory,
      multi: true,
      deps: [Injector],
    },
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { disableClose: true, hasBackdrop: true }
    },
    NgxImageCompressService,
    EzpPreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function authInterceptorFactory(injector: Injector) {
  return new AuthInterceptor(injector);
}

