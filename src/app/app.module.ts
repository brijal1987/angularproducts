import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { DashboardService } from './common/services/dashboard.service';
import { UsercredentialsService } from './common/services/usercredentials.service';
import { AuthGuard } from './common/guards/auth.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { ProductsComponent } from './home/products/products.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { AddproductComponent } from './home/products/addproduct/addproduct.component';
import { EditproductComponent } from './home/products/editproduct/editproduct.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'product/add', component: AddproductComponent, canActivate: [AuthGuard] },
  { path: 'product/edit/:id', component: EditproductComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ProductsComponent,
    PageNotFoundComponent,
    AddproductComponent,
    EditproductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  	DashboardService,
  	UsercredentialsService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
