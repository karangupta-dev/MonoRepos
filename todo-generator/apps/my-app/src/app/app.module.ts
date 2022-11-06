import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ToDoComponent } from './todo/todo.component';
import { CustomMaterialModule } from '../material.module';

export const COMPONENTS = [
  AppComponent,
  ToDoComponent
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
