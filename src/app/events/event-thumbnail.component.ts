import { Component, Input, Output, EventEmitter } from '@angular/core'


@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{inputEvent?.name}}</h2>
    <div>Date: {{inputEvent?.date}}</div>
    <!-- <div [class.green]="inputEvent?.time === '8:00 am'" [ngSwitch]="inputEvent?.time"> -->
    <!-- <div [ngClass]="{green: inputEvent?.time === '8:00 am', bold: inputEvent?.time === '8:00 am'}"     [ngSwitch]="inputEvent?.time"> -->
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="inputEvent?.time">
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
     .green {color: #003300 !important; }
     .bold { font-weight: bold; }
     .thumbnail { min-height:210px; }
     .pad-left { margin-left: 10px; }
     .well div { color: #bbb; }
  `]
})

export class EventThumbnailComponent {
  @Input() inputEvent:any
  
  getStartTimeClass() {
     // 1
     /* const isEarlyStart = this.inputEvent && this.inputEvent.time === '8:00 am'
     return {green: isEarlyStart, bold: isEarlyStart} */
     // 2
     /* if(this.inputEvent && this.inputEvent.time === '8:00 am')
       return 'green bold'
     return '' */
     // 3
     if(this.inputEvent && this.inputEvent.time === '8:00 am')
        return ['green', 'bold']
     return []
  }
}