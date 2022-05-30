import {ModuleWithProviders, NgModule} from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { OtherComponent } from './other/other.component';
import {MyLibConfig} from "./types";
import {MyLibService} from "./my-lib.service";
import {MY_LIB_CONFIG_TOKEN} from "./tokens";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    MyLibComponent,
    OtherComponent
  ],
  imports: [
    CommonModule,
    //
  ],
  exports: [
    MyLibComponent,
    OtherComponent
  ],
  providers: [MyLibService]
})
export class MyLibModule {
  public static forRoot(config: MyLibConfig): ModuleWithProviders<MyLibModule> {
    return {
      ngModule: MyLibModule,
      providers: [{ provide: MY_LIB_CONFIG_TOKEN, useValue: config }]
    }
  }
}
