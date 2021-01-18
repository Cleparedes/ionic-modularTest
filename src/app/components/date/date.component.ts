import { Component, OnInit } from '@angular/core';

declare function update_clock(): any;

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    update_clock();
  }

}
