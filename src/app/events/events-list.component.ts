import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

declare let toastr;

@Component({
  template: `
     <div>
         <h1>Upcoming Angular Events </h1>
         <hr/>
         <div class="row">
            <div *ngFor="let event1 of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event1.name)" [inputEvent]="event1"></event-thumbnail>
            </div>
         </div>
     </div>
  `
})

export class EventsListComponent implements OnInit {
  events:IEvent[]

  constructor(@Inject(EventService) private eventService: EventService, @Inject(ToastrService) private toastr: ToastrService, @Inject(ActivatedRoute) private route: ActivatedRoute) {
  }

  ngOnInit() {
    //this.events = this.eventService.getEvents()
    /* this.eventService.getEvents().subscribe(eventsR => {
      this.events = eventsR
    }) */

    this.events = this.route.snapshot.data['eventsR'];
  } 

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
  }

}