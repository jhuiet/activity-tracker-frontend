import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { ActivityComponent } from './activities/activity-list/activity/activity.component';
import { ActivityDetailComponent } from './activities/activity-detail/activity-detail.component';
import { ActivityEditComponent } from './activities/activity-edit/activity-edit.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ActivityListComponent,
    ActivityComponent,
    ActivityDetailComponent,
    ActivityEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }