import {InjectionToken} from "@angular/core";
import {MyLibConfig} from "./types";

export const MY_LIB_CONFIG_TOKEN = new InjectionToken<MyLibConfig>('MY_LIB_CONFIG');
