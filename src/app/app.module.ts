import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventService,
  EventListResolver,
  EventRouteActivator,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventResolver
} from './events/index';
import {
  ToastrService,
  CollapsibleWellComponent,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

let jQuery = window['$']; 

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  providers: [
    EventService,
    {
      provide : JQ_TOKEN, useValue: jQuery

    },
    ToastrService,
    EventListResolver,
    EventRouteActivator,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    VoterService,
    EventResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

/* export function checkDirtyState() {
  return false
} */

export function checkDirtyState(component: CreateEventComponent) {
    if(component.isDirty) 
       return window.confirm('You have not saved this event, do you really want to cancel?')
    return true;
}
