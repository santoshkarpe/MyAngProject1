import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
      .container { padding-left: 20px; padding-right:2opx; }
      .event-image { height: 100px; }
  `]
})

export class EventDetailsComponent implements OnInit {
  event:IEvent

  constructor(@Inject(EventService) private eventService: EventService,
    @Inject(ActivatedRoute) private route: ActivatedRoute) {}

  ngOnInit() {
    //this.event = this.eventService.getEvent(1);
    this.event = this.eventService.getEvent(
      +this.route.snapshot.params['id']);
   
  }
}