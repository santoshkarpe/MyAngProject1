import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from './shared/event.service';

@Component({
   templateUrl: './create-event.component.html',
   styles: [`
    em { float: right; color:#E05C65; padding-left:10px; }
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error ::-moz-placeholder {color:#999;}
    .error :-moz-placeholder {color:#999;}
    .error :ms-input-placeholder {color:#999;}
  
  `]
})

export class CreateEventComponent implements OnInit {
   event:any
   isDirty:boolean = true
   constructor(@Inject(Router) private router: Router,
    @Inject(EventService) private eventService: EventService) {}

   ngOnInit() {
     this.event = {
      name: 'Ng Spectacular',
      date: new Date('9/26/2036'),
      time: '10:00 am',
      price: 599.99,
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      },
      imageUrl: 'http://ngspectacular.com/logo.com',
      onlineUrl: 'http://ngspectacular.com'
     }
   }
   saveEvent(formValues) {
     //console.log(formValues)
     this.eventService.saveEvent(formValues)
     this.isDirty = false
     this.router.navigate(['/events'])
   }
   cancel() {
     this.router.navigate(['/events'])
   }
}