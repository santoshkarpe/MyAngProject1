import { Injectable, EventEmitter } from '@angular/core';
import { ISession } from '../shared/event.model';

@Injectable()
export class VoterService {

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName);
  }

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter( voter => voter !== voterName);
  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);
  }

}