import { Component, OnInit } from '@angular/core';

declare function recover_weekly_alerts(): any;

@Component({
  selector: 'app-weekly-alert',
  templateUrl: './weekly-alert.component.html',
  styleUrls: ['./weekly-alert.component.scss'],
})
export class WeeklyAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    recover_weekly_alerts();
  }

}
