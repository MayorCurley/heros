import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = ["fly like an eagle"];

  add(message: string) {
    console.log("MessageServie.add(): " + message);
    this.messages.push(message);
  }

  clear() {
    console.log("MessageService.clear()");
    this.messages = [];
  }
}