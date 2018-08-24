import { UserService } from './user.service';
import { AuthGuard } from './auth.guard';
import { PostService } from './post.service';
import {HttpModule} from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import{FormsModule,ReactiveFormsModule,Validators} from '@angular/forms';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import { MarksheetComponent } from './marksheet/marksheet.component';

import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PostComponent } from './post/post.component';

import { NavigationComponent } from './navigation/navigation.component';
import { OrdersComponent } from './orders/orders.component';
import { RecordsComponent } from './records/records.component';
import { CurrencyPipe } from '@angular/common';
import { ToWordsPipe } from './to-words.pipe';
import { NoToWordsPipeComponent } from './no-to-words-pipe/no-to-words-pipe.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LikeComponent } from './like/like.component';
import { LikeChildComponent } from './like-child/like-child.component';
import { StarComponent } from './star/star.component';
import { StarchildComponent } from './starchild/starchild.component';


;

const appRoutes: Routes = [

  { path: '', component:LoginFormComponent  },

  { path: 'records',  canActivate:[AuthGuard],component: RecordsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    MarksheetComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    PostComponent,

    NavigationComponent,
    OrdersComponent,
    RecordsComponent,
    ToWordsPipe,
    NoToWordsPipeComponent,
    LoginFormComponent,

    LikeComponent,

    LikeChildComponent,

    StarComponent,

    StarchildComponent,






  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [
    PostService,UserService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
