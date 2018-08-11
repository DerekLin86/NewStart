import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear(clearItemNum?: number) {
    if (clearItemNum) {
      if (this.messages.length > clearItemNum) {
        this.messages.splice(0, clearItemNum);
      } else {
        this.messages = [];
      }
    } else {
      this.messages = [];
    }
  }
}
