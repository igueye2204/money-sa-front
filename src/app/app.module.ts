import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminPageModule } from './pages/admin/admin.module';
import { authInterceptorProviders } from './helpers/token-interceptor.interceptor';
import { JwtService } from './service/jwt.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  entryComponents: [MenuComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    JwtService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
