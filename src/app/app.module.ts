import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
         MatButtonModule,
         MatSidenavModule,
         MatIconModule,
         MatListModule,
         MatGridListModule,
         MatCardModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {SideNavComponent} from './side-nav/side-nav.component';
import {HeaderComponent} from './header/header.component'
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FormComponent } from './form/form.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
import {NgxPaginationModule} from 'ngx-pagination';

import { Observable } from 'rxjs';

const appRoutes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component }
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    SideNavComponent,
    HeaderComponent,
    FormComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    NgxPaginationModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
