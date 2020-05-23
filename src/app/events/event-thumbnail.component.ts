import { Component, Input, Output, EventEmitter } from '@angular/core'


@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{inputEvent?.name}}</h2>
    <div>Date: {{inputEvent?.date}}</div>
    <!-- <div [style.color]="inputEvent?.time === '8:00 am' ? '#003300' : '#bbb'" [ngSwitch]="inputEvent?.time"> -->
    <!-- <div [ngStyle]="{'color': inputEvent?.time === '8:00 am' ? '#003300' : '#bbb', 'font-weight': inputEvent?.time === '8:00 am' ? 'bold' : 'normal'}" [ngSwitch]="inputEvent?.time"> -->
    <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="inputEvent?.time">
       Time: {{inputEvent?.time}}
       <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
       <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
       <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{inputEvent?.price}}</div>
    <div *ngIf="inputEvent?.location">
      <span>Location: {{inputEvent?.location?.address}}</span>
      <span class="pad-left">{{inputEvent?.location?.city}}, {{inputEvent?.location?.country}}</span>
    </div>
    <div *ngIf="inputEvent?.onlineUrl">
      Online URL: {{inputEvent?.onlineUrl}}
    </div>        
  </div>
  `,
  styles: [`
     .thumbnail { min-height:210px; }
     .pad-left { margin-left: 10px; }
     .well div { color: #bbb; }
  `]
})

export class EventThumbnailComponent {
  @Input() inputEvent:any
  
  getStartTimeStyle():any {
    if(this.inputEvent && this.inputEvent.time === '8:00 am') 
       return {'color': '#003300', 'font-weight': 'bold'}
    return {}
  }
}