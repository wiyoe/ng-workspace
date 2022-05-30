import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyLibModule} from "my-lib";
import {ProjectTypes} from "my-lib";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibModule.forRoot({
      siteTitle: 'My Awesome Website',
      projectType: ProjectTypes.EBA,
      userData: {
        id: "123456",
        name: "John DOE"
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
