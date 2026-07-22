import { Injectable } from '@angular/core';
import { AppLauncherService } from './app-launcher.service';

@Injectable({
  providedIn: 'root'
})
export class AiCoreService {

  constructor(private launcher: AppLauncherService) {}

  async process(text: string): Promise<string> {

    const input = text.toLowerCase();

    if (input.includes('open camera')) {
      await this.launcher.openCamera();
      return 'Opening Camera...';
    }

    if (input.includes('open settings')) {
      await this.launcher.openSettings();
      return 'Opening Settings...';
    }

    if (input.includes('hello') || input.includes('hi')) {
      return 'Hello Commander.';
    }

    return "I don't understand yet.";
  }
}