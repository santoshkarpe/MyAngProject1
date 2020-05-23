import { Component, Input, Output, EventEmitter } from '@angular/core'


@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{inputEvent.name}}</h2>
    <div>Date: {{inputEvent.date}}</div>
    <div>Time: {{inputEvent.time}}</div>
    <div>Price: \${{inputEvent.price}}</div>
    <div>
      <span>Location: {{inputEvent.location.address}}</span>
      <span>&nbsp;</span>
      <span>{{inputEvent.location.city}}, {{inputEvent.location.country}}</span>
    </div> 
    <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>         
  </div>
  `
})

export class EventThumbnailComponent {
  @Input() inputEvent:any
  @Output() outputEventClick = new EventEmitter()

  handleClickMe() {
    //console.log('clicked')
    //this.outputEventClick.emit('santosh')
    this.outputEventClick.emit(this.inputEvent.name)
  }
}