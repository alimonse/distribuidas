import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { FormsModule }    from '@angular/forms';



import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import { Service } from './service';
import {SpinnerModule} from 'primeng/spinner';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    ChartModule,
    CheckboxModule,
    FormsModule,
    HttpClientModule,
    SpinnerModule,
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
