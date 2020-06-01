import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'

})

export class SessionListComponent implements OnChanges {
  @Input() sessionDetails: ISession[];
  @Input() filterBy1: string;
  visibleSessions: ISession[] = [];

  ngOnChanges() {
    if(this.sessionDetails) {
      this.filterSessions(this.filterBy1)
    }
  }

  filterSessions(filter1) {
    if(filter1 === 'all') {
      this.visibleSessions = this.sessionDetails.slice(0);
    } else {
      this.visibleSessions = this.sessionDetails.filter(session => {
        return session.level.toLocaleLowerCase() === filter1;
      })

    }

  }

}