import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/atoms/header/header.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { FormComponent } from './components/molecules/form/form.component';
import { UserPickerComponent } from './components/molecules/user-picker/user-picker.component';
import { UserCardComponent } from './components/atoms/user-card/user-card.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ButtonComponent, FormComponent, UserPickerComponent, UserCardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
