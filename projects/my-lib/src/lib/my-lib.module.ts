import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { OtherComponent } from './other/other.component';



@NgModule({
  declarations: [
    MyLibComponent,
    OtherComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    OtherComponent
  ]
})
export class MyLibModule { }
