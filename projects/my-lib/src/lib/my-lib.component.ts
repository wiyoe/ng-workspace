import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MyLibService} from "./my-lib.service";
import {MyLibConfig} from "./types";

@Component({
  selector: 'lib-my-lib',
  templateUrl: './my-lib.component.html',
  styleUrls: ['./my-lib.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class MyLibComponent implements OnInit {

  libConfig: MyLibConfig

  constructor(private myLibService: MyLibService) {
    this.libConfig = this.myLibService.getConfig();
  }

  ngOnInit(): void {
    console.log('CONFIG:', this.myLibService.getConfig());
  }

}
