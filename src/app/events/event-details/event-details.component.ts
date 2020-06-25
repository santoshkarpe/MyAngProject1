import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, ISession } from '../shared/index';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
      .container { padding-left: 20px; padding-right:2opx; }
      .event-image { height: 100px; }
      a {cursor:pointer}
  `]
})

export class EventDetailsComponent implements OnInit {
  event:IEvent
  addMode: boolean
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(@Inject(EventService) private eventService: EventService,
    @Inject(ActivatedRoute) private route: ActivatedRoute) {}

  ngOnInit() {
    //this.event = this.eventService.getEvent(1);
    //this.event = this.eventService.getEvent(
     // +this.route.snapshot.params['id']);

     /* this.route.params.forEach((params: Params) => {
       //this.event = this.eventService.getEvent(+params['id']);
       /* this.eventService.getEvent(+params['id']).subscribe((e : IEvent)=> {
         this.event = e;
         this.addMode = false;
       }) 

      this.event = this.route.snapshot.data['eventR'];
      this.addMode = false;
     }) */

     this.route.data.forEach((data) => {
     this.event = data['eventR'];
     this.addMode = false;
    })
   
  }

  addSession() {
    this.addMode = true

  }

  saveNewSession(session:ISession) {
    const nextId = Math.max.apply(null,this.event.sessions.map(s => s.id))
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false
  }

  cancelSession() {
    this.addMode = false
  }
}