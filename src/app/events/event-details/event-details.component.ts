import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../shared/event.service'

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
      .container { padding-left: 20px; padding-right:2opx; }
      .event-image { height: 100px; }
  `]
})

export class EventDetailsComponent implements OnInit {
  event:any
  
  constructor(@Inject(EventService) private eventService: EventService) {}

  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }
}