import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportantActivitiesComponent } from './important-activities/important-activities.component';

@NgModule({
  declarations: [ImportantActivitiesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ImportantActivitiesComponent
  ]
})
export class DashboardModule { }
