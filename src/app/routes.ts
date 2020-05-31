import { Routes } from '@angular/router';

import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import {
  EventsListComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent
} from './events/index';

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {eventsR : EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: 'events/session/new', component: CreateSessionComponent},
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: './user/user.module#UserModule'}
]