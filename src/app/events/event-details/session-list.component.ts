import { Component, Input, OnChanges, Inject } from '@angular/core';
import { ISession } from '../shared/index';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'

})

export class SessionListComponent implements OnChanges {
  @Input() sessionDetails: ISession[];
  @Input() filterBy1: string;
  @Input() sortBy1: string;
  @Input() eventId: number;
  visibleSessions: ISession[] = [];

  constructor(@Inject(AuthService) private auth: AuthService,
  @Inject(VoterService) private voterService: VoterService) { 
  }
  ngOnChanges() {
    if(this.sessionDetails) {
      this.filterSessions(this.filterBy1);
      this.sortBy1 === 'name' ? this.visibleSessions.sort(sortByNameAsc) 
      : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  toggleVote(session: ISession) {
    if(this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
    }

    if(this.sortBy1 === "votes")
       this.visibleSessions.sort(sortByVotesDesc);

  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);

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

function sortByNameAsc(s1:ISession, s2:ISession) {
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1

}

function sortByVotesDesc(s1:ISession, s2:ISession) {
  return s2.voters.length - s1.voters.length;
}