import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventResolver implements Resolve<any> {

  constructor(@Inject(EventService) private eventService: EventService) {
  }
  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id'])

  }
}