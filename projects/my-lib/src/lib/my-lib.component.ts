import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styleUrls: ['./my-lib.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
