import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  template: `
     <div>
         <h1>Upcoming Angular Events </h1>
         <hr/>
         <div class="row">
            <div *ngFor="let event1 of events" class="col-md-5">
                <event-thumbnail [inputEvent]="event1"></event-thumbnail>
            </div>
         </div>
     </div>
  `
})

export class EventsListComponent implements OnInit {
  events:any[]

  constructor(@Inject(EventService) private eventService: EventService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  } 

}