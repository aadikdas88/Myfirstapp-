import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  execute(command: string): string {

    command = command.toLowerCase();

    if (command.includes('hello')) {
      return 'Hello Commander.';
    }

    if (command.includes('time')) {
      return new Date().toLocaleTimeString();
    }

    if (command.includes('date')) {
      return new Date().toDateString();
    }

    if (command.includes('battery')) {
      return 'Battery information will be available soon.';
    }

    if (command.includes('open settings')) {
      return 'Opening Settings...';
    }

    if (command.includes('open camera')) {
      return 'Opening Camera...';
    }

    if (command.includes('open whatsapp')) {
      return 'Opening WhatsApp...';
    }

    if (command.includes('open apps')) {
      return 'Opening App Drawer...';
    }

    return "Sorry Commander, I don't understand that command yet.";
  }
}