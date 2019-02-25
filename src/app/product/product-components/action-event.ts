import {EventType} from './event-type.enum';

export class ActionEvent {

  type: EventType;
  argument: any;
  event: Event;

  constructor(type: EventType, argument: any, event: Event) {
    this.type = type;
    this.argument = argument;
    this.event = event;
  }
}
