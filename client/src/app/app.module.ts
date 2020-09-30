import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { MaterialModuleModule } from './material/material-module/material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';
import { DialogErrorComponent } from './components/dialog-error/dialog-error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    DialogFormComponent,
    DialogErrorComponent
  ],
  entryComponents: [DialogFormComponent, DialogErrorComponent]
  ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
