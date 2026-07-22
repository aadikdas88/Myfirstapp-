import { Injectable } from '@angular/core';
import { AppLauncher } from '@capacitor/app-launcher';

@Injectable({
  providedIn: 'root'
})
export class AppLauncherService {

  async openCamera() {
    await AppLauncher.openUrl({
      url: 'android.media.action.IMAGE_CAPTURE'
    });
  }

  async openSettings() {
    await AppLauncher.openUrl({
      url: 'android.settings.SETTINGS'
    });
  }
}