import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear(isAdvanced: boolean) {
    if (isAdvanced === true) {
      if (this.messages.length <= 5) {
        this.messages = [];
      } else {
        this.messages.splice(0, 5);
      }
    } else {
      this.messages = [];
    }
  }
}
