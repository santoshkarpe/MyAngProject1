import { Component, Input, Output, EventEmitter } from '@angular/core'


@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{inputEvent?.name}}</h2>
    <div>Date: {{inputEvent?.date}}</div>
    <div>Time: {{inputEvent?.time}}</div>
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
  someProperty:any = "Some Property"

  logFoo() {
    console.log('foo')
  }
}