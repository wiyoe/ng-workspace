import {Inject, Injectable, Optional} from '@angular/core';
import {MyLibConfig} from "./types";
import {MY_LIB_CONFIG_TOKEN} from "./tokens";

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor(@Optional() @Inject(MY_LIB_CONFIG_TOKEN) private readonly config: MyLibConfig) {
    //
  }

  getConfig(): MyLibConfig{
    return this.config;
  }
}
