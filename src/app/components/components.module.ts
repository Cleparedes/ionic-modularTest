import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ToggleCardComponent } from './toggle-card/toggle-card.component';
import { WeeklyAlertComponent} from './weekly-alert/weekly-alert.component';
import { DateComponent } from './date/date.component';
import { WeatherComponent } from './weather/weather.component';
import { FireButtonComponent } from './fire-button/fire-button.component';

@NgModule({
  declarations: [
    ToggleCardComponent,
    WeeklyAlertComponent,
    DateComponent,
    WeatherComponent,
    FireButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ToggleCardComponent,
    WeeklyAlertComponent,
    DateComponent,
    WeatherComponent,
    FireButtonComponent
  ]
})
export class ComponentsModule { }
